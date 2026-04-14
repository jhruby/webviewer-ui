import core from 'core';

export default (customInput, pageLabels, totalPages = core.getTotalPages()) => {
  // By default we use total pages of loaded doc. But we could also use this for a doc
  // that is not loaded (like in page replacement) so we want the option to pass it as a param

  const pagesToPrint = [];

  // no input, assume every page
  if (!customInput) {
    for (let i = 1; i <= totalPages; i++) {
      pagesToPrint.push(i);
    }
    return pagesToPrint;
  }

  const pageGroups = customInput.split(',');
  pageGroups.forEach((pageGroup) => {
    const range = pageGroup.split('-');
    const isSinglePage = range.length === 1;
    const isRangeOfPages = range.length === 2;

    if (isSinglePage) {
      const page = getPageNumber(range[0], pageLabels, totalPages);
      pagesToPrint.push(page);
    } else if (isRangeOfPages) {
      addRangeOfPagesTo(pagesToPrint, range, pageLabels, totalPages);
    }
  });

  return pagesToPrint
    .filter((pageNumber, index, pagesToPrint) => {
      const isUnique = pagesToPrint.indexOf(pageNumber) === index;
      const isValidPageNumber = pageNumber > 0 && pageNumber <= totalPages;
      return isUnique && isValidPageNumber;
    })
    .sort((a, b) => a - b);
};

const addRangeOfPagesTo = (pagesToPrint, range, pageLabels, totalPages) => {
  const start = getPageNumber(range[0], pageLabels, totalPages);
  let end;

  if (range[1] === '') {
    // range like 4- means page 4 to the end of the document
    end = core.getTotalPages();
  } else {
    end = getPageNumber(range[1], pageLabels, totalPages);
  }

  for (let i = start; i <= end; i++) {
    pagesToPrint.push(i);
  }
};

const getPageNumber = (character, pageLabels, totalPages) => {
  if ( !isNaN(character) && +character > 0 && +character <= totalPages) {
    pageNumber = +character;
  }

  if (!pageNumber) {
    console.warn(`${character} is not a valid page number`);
  }

  return pageNumber;
};
