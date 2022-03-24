import i18n from 'i18next';

import actions from 'actions';
import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';

import { workerTypes } from 'constants/types';
import { getSortStrategies } from 'constants/sortStrategies';
import { mapAnnotationToKey, getDataWithKey } from 'constants/map';
import {isSafari, isChromeOrFirefoxOniOS} from 'helpers/device';
import core from 'core';

let pendingCanvases = [];
let renderedCanvases = [];
let PRINT_QUALITY = 1;
let colorMap;

dayjs.extend(LocalizedFormat);

export const print = async (dispatch, isEmbedPrintSupported, sortStrategy, colorMap, options = {}) => {
  const {
    includeAnnotations,
    includeComments,
    onProgress,
    printQuality = PRINT_QUALITY,
    printWithoutModal = false,
    language,
    isPrintCurrentView,
    printedNoteDateFormat: dateFormat
  } = options;
  let { pagesToPrint } = options;

  if (!core.getDocument()) {
    return;
  }

  const documentType = core.getDocument().getType();
  const bbURLPromise = core.getPrintablePDF();

  if (bbURLPromise) {
    const printPage = window.open('', '_blank');
    printPage.document.write(i18n.t('message.preparingToPrint'));
    bbURLPromise.then(result => {
      printPage.location.href = result.url;
    });
  } else if (isEmbedPrintSupported && documentType === workerTypes.PDF) {
    dispatch(actions.openElement('loadingModal'));
    printPdf().then(() => {
      dispatch(actions.closeElement('loadingModal'));
    });
  } else if (includeAnnotations || includeComments || printWithoutModal) {
    if (!pagesToPrint) {
      pagesToPrint = [];
      for (let i = 1; i <= core.getTotalPages(); i++) {
        pagesToPrint.push(i);
      }
    }
    if (isPrintCurrentView) {
      pagesToPrint = [core.getDocumentViewer().getCurrentPage()];
    }

    const createPages = creatingPages(
      pagesToPrint,
      pagesToPrint,
      includeComments,
      includeAnnotations,
      printQuality,
      sortStrategy,
      colorMap,
      dateFormat,
      onProgress,
      isPrintCurrentView,
      language,
      true  
    );
    Promise.all(createPages)
      .then(pages => {
        printPages(pages);
      })
      .catch(e => {
        console.error(e);
      });
  } else {
    dispatch(actions.openElement('printModal'));
  }
};

const printPdf = () =>
  core.exportAnnotations().then(xfdfString => {
    const printDocument = true;
    return core
      .getDocument()
      .getFileData({ xfdfString, printDocument })
      .then(data => {
        const arr = new Uint8Array(data);
        const blob = new Blob([arr], { type: 'application/pdf' });

        const printHandler = document.getElementById('print-handler');
        printHandler.src = URL.createObjectURL(blob);

        return new Promise(resolve => {
          const loadListener = function() {
            printHandler.contentWindow.print();
            printHandler.removeEventListener('load', loadListener);

            resolve();
          };

          printHandler.addEventListener('load', loadListener);
        });
      });
  });

export const creatingPages = (originalPagesToPrint, pagesToPrint, includeComments, includeAnnotations, printQuality, sortStrategy, clrMap, dateFormat, onProgress, isPrintCurrentView, language, lastRun) => {
  const createdPages = [];
  pendingCanvases = [];
  PRINT_QUALITY = printQuality;
  colorMap = clrMap;

  pagesToPrint.forEach(pageNumber => {
    createdPages.push(creatingImage(pageNumber, includeAnnotations, isPrintCurrentView));

    if (onProgress) {
      createdPages[createdPages.length - 1].then(htmlElement => {
        onProgress(pageNumber, htmlElement);
      });
    }
  });

  if (lastRun) {
    const printableAnnotationNotes = getPrintableAnnotationNotes(originalPagesToPrint);
    if (includeComments && printableAnnotationNotes) {
      const sortedNotes = getSortStrategies()[sortStrategy].getSortedNotes(printableAnnotationNotes);
      if (sortedNotes.length) {
        createdPages.push(creatingNotesPage(sortedNotes, dateFormat, language));
      }
      if (onProgress) {
        createdPages[createdPages.length - 1].then(htmlElement => {
          onProgress(createdPages.length - 1, htmlElement);
        });
      }
    }
  }

  return createdPages;
};

export const printPages = pages => {
  const printHandler = document.getElementById('print-handler');
  printHandler.innerHTML = '';

  const fragment = document.createDocumentFragment();
  pages.forEach(page => {
    fragment.appendChild(page);
  });

  printHandler.appendChild(fragment);

  if (isSafari && !isChromeOrFirefoxOniOS) {
    // Print for Safari browser. Makes Safari 11 consistently work.
    document.execCommand('print');
  } else {
    window.print();
  }
};

export const cancelPrint = () => {
  const doc = core.getDocument();
  pendingCanvases.forEach(id => doc.cancelLoadCanvas(id));
};

export const unloadCanvases = () =>{
  const doc = core.getDocument();
  renderedCanvases.forEach(c => {
    try {
      doc.unloadCanvasResources(c.id);
      c.img.parentNode.removeChild(c.img);
    }
    catch (e){} //ignore
  });
  renderedCanvases = [];
}

const getPrintableAnnotationNotes = (pages) =>
  core
    .getAnnotationsList()
    .filter(
      annotation => 
        pages.indexOf(annotation.PageNumber) !== -1 &&
        annotation.Listable &&
        !annotation.isReply() &&
        !annotation.isGrouped() &&
        annotation.Printable &&
        annotation.Subject === "Note" ,
    );

const creatingImage = (pageNumber, includeAnnotations, isPrintCurrentView) =>
  new Promise(resolve => {
    const pageIndex = pageNumber - 1;
    let zoom = 1;
    let renderRect;
    const printRotation = getPrintRotation(pageIndex);
    const onCanvasLoaded = async canvas => {
      pendingCanvases = pendingCanvases.filter(pendingCanvas => pendingCanvas !== id);      
      positionCanvas(canvas, pageIndex);
      let printableAnnotInfo = [];
      if (!includeAnnotations) {
        // according to Adobe, even if we exclude annotations, it will still draw widget annotations
        const annotatationsToPrint = core.getAnnotationsList().filter(annotation => {
          return annotation.PageNumber === pageNumber && !(annotation instanceof window.Annotations.WidgetAnnotation);
        });
        // store the previous Printable value so that we can set it back later
        printableAnnotInfo = annotatationsToPrint.map(annotation => ({
          annotation, printable: annotation.Printable
        }));
        // set annotations to false so that it won't show up in the printed page
        annotatationsToPrint.forEach(annotation => {
          annotation.Printable = false;
        });
      }
      await drawAnnotationsOnCanvas(canvas, pageNumber);

      printableAnnotInfo.forEach(info => {
        info.annotation.Printable = info.printable;
      });

      const img = document.createElement('img');
      img.src = canvas.toDataURL();
      img.onload = () => {
        resolve(img);
      };
      
      canvas = null;      
      renderedCanvases.push({img, id});
    };

    if (isPrintCurrentView) {
      const displayMode = core.getDisplayModeObject();
      const containerElement = core.getScrollViewElement();
      const documentElement = core.getViewerElement();
      const headerElement = document.querySelector('.Header');
      const headerItemsElements = document.querySelector('.HeaderToolsContainer');

      const headerHeight = headerElement?.clientHeight + headerItemsElements?.clientHeight;
      const coordinates = [];
      coordinates[0] = displayMode.windowToPageNoRotate({
        x: Math.max(containerElement.scrollLeft, documentElement.offsetLeft),
        y: Math.max(containerElement.scrollTop + headerHeight, 0)
      }, pageNumber);
      coordinates[1] = displayMode.windowToPageNoRotate({
        x: Math.min(window.innerWidth, documentElement.offsetLeft + documentElement.offsetWidth) + containerElement.scrollLeft,
        y: window.innerHeight + containerElement.scrollTop
      }, pageNumber);
      const x1 = Math.min(coordinates[0].x, coordinates[1].x);
      const y1 = Math.min(coordinates[0].y, coordinates[1].y);
      const x2 = Math.max(coordinates[0].x, coordinates[1].x);
      const y2 = Math.max(coordinates[0].y, coordinates[1].y);

      zoom = core.getZoom();
      renderRect = { x1, y1, x2, y2 };
    }

    const id = core.getDocument().loadCanvas({
      pageNumber,
      zoom,
      pageRotation: printRotation,
      drawComplete: onCanvasLoaded,
      multiplier: PRINT_QUALITY,
      'print': true,
      renderRect
    });
    pendingCanvases.push(id);
  });

const creatingNotesPage = (annotations, dateFormat, language) =>
  new Promise(resolve => {
    const container = document.createElement("div");
    container.className = "page__container";
    
    const title = document.createElement("h1");
    title.innerHTML = `${window.parent.document.title.substr(0, window.parent.document.title.lastIndexOf('|'))}`;
    
    const table = document.createElement('table');
    table.className = "print__table";

    const header = document.createElement('tr');
    header.innerHTML = `<th>${i18n.t('option.shared.pageNumber')}</th><th>${i18n.t('option.shared.notes')}</th>`;

    table.appendChild(header);
    annotations.forEach(annotation => {
      const note = getNote(annotation, dateFormat, language);

      table.appendChild(note);
    });

    container.appendChild(title);
    container.appendChild(table);
    resolve(container);
  });

const getPrintRotation = pageIndex => {
  const { width, height } = core.getPageInfo(pageIndex + 1);
  const documentRotation = getDocumentRotation(pageIndex);
  let printRotation = (4 - documentRotation) % 4;

  // automatically rotate pages so that they fill up as much of the printed page as possible
  if (printRotation % 2 === 0 && width > height) {
    printRotation++;
  } else if (printRotation % 2 === 1 && height > width) {
    printRotation--;
  }

  return printRotation;
};

const positionCanvas = (canvas, pageIndex) => {
  const { width, height } = core.getPageInfo(pageIndex + 1);
  const documentRotation = getDocumentRotation(pageIndex);
  const ctx = canvas.getContext('2d');

  const printRotation = (4 - documentRotation) % 4;
  // To check if automatic print rotation will be applied
  const isAutoRotated = ((printRotation % 2 === 0 && width > height) || (printRotation % 2 === 1 && height > width));

  // If this is pdf js and auto rotated, apply different transform
  if (window.utils.isPdfjs && isAutoRotated) {
    switch (documentRotation) {
      case 0:
        ctx.translate(height, 0);
        ctx.rotate((90 * Math.PI) / 180);
        break;
      case 1:
        ctx.translate(0, height);
        ctx.rotate((270 * Math.PI) / 180);
        break;
      case 2:
        ctx.translate(height, 0);
        ctx.rotate((-270 * Math.PI) / 180);
        break;
      case 3:
        ctx.translate(0, height);
        ctx.rotate((270 * Math.PI) / 180);
        break;
    }

  } else if (!window.utils.isPdfjs) {
    switch (documentRotation) {
      case 1:
        ctx.translate(width, 0);
        break;
      case 2:
        ctx.translate(width, height);
        break;
      case 3:
        ctx.translate(0, height);
        break;
    }
    ctx.rotate((documentRotation * 90 * Math.PI) / 180);
  }
};

const drawAnnotationsOnCanvas = (canvas, pageNumber) => {
  const widgetAnnotations = core
    .getAnnotationsList()
    .filter(annotation => annotation.PageNumber === pageNumber && annotation instanceof window.Annotations.WidgetAnnotation);
  // just draw markup annotations
  if (widgetAnnotations.length === 0) {
    return core.drawAnnotations(pageNumber, canvas);
  }
  // draw all annotations
  const widgetContainer = createWidgetContainer(pageNumber - 1);
  return core.drawAnnotations(pageNumber, canvas, true, widgetContainer).then(() => {
    document.body.appendChild(widgetContainer);
    return import(/* webpackChunkName: 'html2canvas' */ 'html2canvas').then(({ default: html2canvas }) => {
      return html2canvas(widgetContainer, {
        canvas,
        backgroundColor: null,
        scale: 1,
        logging: false,
      }).then(() => {
        document.body.removeChild(widgetContainer);
      });
    });
  });
};

const getDocumentRotation = pageIndex => {
  const pageNumber = pageIndex + 1;
  const completeRotation = core.getCompleteRotation(pageNumber);
  const viewerRotation = core.getRotation(pageNumber);

  return (completeRotation - viewerRotation + 4) % 4;
};

const getNote = (annotation, dateFormat, language) => {
  const note = document.createElement('tr');

  const page = document.createElement('td');
  page.innerHTML = `${annotation.PageNumber}`
  
  const content = document.createElement('td');
  content.innerHTML = `${annotation.getContents()}`;

  const replies = annotation.getReplies();
  if(replies.length > 0) {
    const list = document.createElement('ul');
    replies.forEach(reply => {
      const noteReply = document.createElement('li');
      noteReply.innerHTML = `${reply.getContents()}`;

      list.appendChild(noteReply);
    });
    content.appendChild(list);
  }

  note.appendChild(page);
  note.appendChild(content);

  return note;
};

const getNoteIcon = annotation => {
  const key = mapAnnotationToKey(annotation);
  const iconColor = colorMap[key] && colorMap[key].iconColor;
  const icon = getDataWithKey(key).icon;
  const isBase64 = icon && icon.trim().indexOf('data:') === 0;

  let noteIcon;
  if (isBase64) {
    noteIcon = document.createElement('img');
    noteIcon.src = icon;
  } else {
    let innerHTML;
    if (icon) {
      const isInlineSvg = icon.indexOf('<svg') === 0;
      /* eslint-disable global-require */
      innerHTML = isInlineSvg ? icon : require(`../../assets/icons/${icon}.svg`);
    } else {
      innerHTML = annotation.Subject;
    }

    noteIcon = document.createElement('div');
    noteIcon.innerHTML = innerHTML;
  }

  noteIcon.className = 'note__icon';
  noteIcon.style.color = iconColor && annotation[iconColor].toHexString();
  return noteIcon;
};

const getNoteInfo = (annotation, dateFormat, language) => {
  const info = document.createElement('div');

  info.className = 'note__info';
  info.innerHTML = `
      ${i18n.t('option.shared.page')}: ${annotation.PageNumber}
  `;

  return info;
};

const getNoteContent = annotation => {
  const contentElement = document.createElement('div');
  const contentText = annotation.getContents();

  contentElement.className = 'note__content';
  if (contentText) {
    // ensure that new lines are preserved and rendered properly
    contentElement.style.whiteSpace = 'pre-wrap';
    contentElement.innerHTML = `${contentText}`;
  }
  return contentElement;
};

const createWidgetContainer = pageIndex => {
  const { width, height } = core.getPageInfo(pageIndex + 1);
  const widgetContainer = document.createElement('div');

  widgetContainer.id = 'printWidgetContainer';
  widgetContainer.style.width = width;
  widgetContainer.style.height = height;
  widgetContainer.style.position = 'relative';
  widgetContainer.style.top = '-10000px';

  return widgetContainer;
};
