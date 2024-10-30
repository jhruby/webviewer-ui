"use strict";(self.webpackChunkwebviewer_ui=self.webpackChunkwebviewer_ui||[]).push([[4717],{"./src/components/PrintModal/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>components_PrintModal});var react=__webpack_require__("./node_modules/react/index.js"),actions=__webpack_require__("./src/redux/actions/index.js"),selectors=__webpack_require__("./src/redux/selectors/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),dataElement=__webpack_require__("./src/constants/dataElement.js"),core=__webpack_require__("./src/core/index.js"),print=__webpack_require__("./src/helpers/print.js"),rasterPrint=__webpack_require__("./src/helpers/rasterPrint.js"),getRootNode=__webpack_require__("./src/helpers/getRootNode.js"),device=__webpack_require__("./src/helpers/device.js"),printGrayscaleDarknessFactor=__webpack_require__("./src/helpers/printGrayscaleDarknessFactor.js"),printCurrentViewHelper=__webpack_require__("./src/helpers/printCurrentViewHelper.js");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}var _ref,cropDocumentToCurrentView=(_ref=_async_to_generator((function(document){var docViewer,currentPageNumber,numPages,renderRect,pageDimensions,cropRect,pagesToRemove;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return docViewer=core.A.getDocumentViewer(),currentPageNumber=docViewer.getCurrentPage(),numPages=document.getPageCount(),renderRect=(0,printCurrentViewHelper.d)(currentPageNumber),pageDimensions=core.A.getDocument().getPageInfo(currentPageNumber),cropRect=function(renderRect,pageDimensions){var x2Diff,y2Diff;return{x1:renderRect.y1<0?0:renderRect.x1,x2:(x2Diff=pageDimensions.width-renderRect.x2<0?0:pageDimensions.width-renderRect.x2)>pageDimensions.width?0:x2Diff,y1:renderRect.y1<0?0:renderRect.y1,y2:(y2Diff=pageDimensions.height-renderRect.y2<0?0:pageDimensions.height-renderRect.y2)>pageDimensions.height?0:y2Diff}}(renderRect,pageDimensions),[4,document.cropPages([currentPageNumber],cropRect.y1,cropRect.y2,cropRect.x1,cropRect.x2)];case 1:return _state.sent(),pagesToRemove=function(currentPageNumber,numPages){for(var pagesToRemove=[],i=1;i<=numPages;i++)i!==currentPageNumber&&pagesToRemove.push(i);return pagesToRemove}(currentPageNumber,numPages),[4,document.removePages(pagesToRemove)];case 2:return _state.sent(),[2,document]}}))})),function cropDocumentToCurrentView(document){return _ref.apply(this,arguments)}),createPages=function(){var _ref=_async_to_generator((function(document,annotManager,pagesToPrint,printingOptions,watermarkModalOptions){var extension,bbURLPromise,result,data,xfdf,buff,pagesArray;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return extension=document.getType(),bbURLPromise=document.getPrintablePDF(),[4,extractXFDF(annotManager,pagesToPrint,null==printingOptions?void 0:printingOptions.includeAnnotations)];case 1:return xfdf=_state.sent(),"pdf"!==extension||bbURLPromise?[3,4]:[4,document.extractPages(pagesToPrint,xfdf)];case 2:return data=_state.sent(),[4,window.Core.createDocument(data,{extension:"pdf"})];case 3:return result=_state.sent(),[3,9];case 4:return[4,document.getFileData({downloadType:"pdf"})];case 5:return buff=_state.sent(),[4,window.Core.createDocument(buff,{extension:"pdf"})];case 6:return[4,(result=_state.sent()).extractPages(pagesToPrint,xfdf)];case 7:return data=_state.sent(),[4,window.Core.createDocument(data,{extension:"pdf"})];case 8:result=_state.sent(),_state.label=9;case 9:return(null==printingOptions?void 0:printingOptions.isCurrentView)?[4,cropDocumentToCurrentView(result)]:[3,11];case 10:result=_state.sent(),_state.label=11;case 11:return watermarkModalOptions?(result.setWatermark(watermarkModalOptions),[4,createDocumentForPrint(result)]):[3,13];case 12:result=_state.sent(),_state.label=13;case 13:return(null==printingOptions?void 0:printingOptions.includeComments)?(pagesArray=Array.from({length:pagesToPrint.length},(function(_,i){return(i+1).toString()})),[4,result.formatDocumentForPrint(pagesArray)]):[3,15];case 14:result=_state.sent(),_state.label=15;case 15:return[2,result]}}))}));return function createPages(document,annotManager,pagesToPrint,printingOptions,watermarkModalOptions){return _ref.apply(this,arguments)}}(),extractXFDF=function(){var _ref=_async_to_generator((function(annotManager,pagesToPrint,includeAnnotations){var map,customAnnotationTypes,annotationList,xfdfString;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return includeAnnotations?(map=annotManager.getRegisteredAnnotationTypes(),customAnnotationTypes=Object.keys(map).reduce((function(acc,key){return map[key].forEach((function(customType){Object.getPrototypeOf(customType.prototype)===window.Core.Annotations.CustomAnnotation.prototype&&(acc.push({originalSerializationMode:customType.SerializationType,customType}),customType.SerializationType=window.Core.Annotations.CustomAnnotation.SerializationTypes.STAMP)})),acc}),[]),annotationList=annotManager.getAnnotationsList().filter((function(annot){return pagesToPrint.indexOf(annot.PageNumber)>-1})),[4,annotManager.exportAnnotations({annotationList})]):[3,2];case 1:return xfdfString=_state.sent(),customAnnotationTypes.forEach((function(type){type.customType.SerializationType=type.originalSerializationMode})),[2,xfdfString];case 2:return[2,'<?xml version="1.0" encoding="UTF-8" ?><xfdf xmlns="http://ns.adobe.com/xfdf/" xml:space="preserve"></xfdf>']}}))}));return function extractXFDF(annotManager,pagesToPrint,includeAnnotations){return _ref.apply(this,arguments)}}(),convertToGrayscaleDocument=function(){var _ref=_async_to_generator((function(pdfDocument){var PDFNet,PDFDoc,ElementBuilder,ElementWriter,ColorSpace,ColorPt,Matrix2D,GState,pdfDoc,newDoc,itr,page,cropBox,mediaBox,newPage,_,elementBuilder,elementWriter,formElement,xObj,_1,_tmp,element,_2,_tmp1,gState,_3,_4,_5,_tmp2,_6,_7,softMask,_tmp3;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return PDFNet=window.Core.PDFNet,PDFDoc=PDFNet.PDFDoc,ElementBuilder=PDFNet.ElementBuilder,ElementWriter=PDFNet.ElementWriter,ColorSpace=PDFNet.ColorSpace,ColorPt=PDFNet.ColorPt,Matrix2D=PDFNet.Matrix2D,GState=PDFNet.GState,[4,pdfDocument.getPDFDoc()];case 1:return(pdfDoc=_state.sent()).initSecurityHandler(),[4,PDFDoc.create()];case 2:return newDoc=_state.sent(),[4,pdfDoc.getPageIterator(1)];case 3:itr=_state.sent(),_state.label=4;case 4:return[4,itr.hasNext()];case 5:return _state.sent()?[4,itr.current()]:[3,52];case 6:return[4,(page=_state.sent()).getCropBox()];case 7:return cropBox=_state.sent(),[4,page.getMediaBox()];case 8:return mediaBox=_state.sent(),[4,newDoc.pageCreate(mediaBox)];case 9:return newPage=_state.sent(),_=newPage.setRotation,[4,page.getRotation()];case 10:return[4,_.apply(newPage,[_state.sent()])];case 11:return _state.sent(),[4,ElementBuilder.create()];case 12:return elementBuilder=_state.sent(),[4,ElementWriter.create()];case 13:return[4,(elementWriter=_state.sent()).beginOnPage(newPage,ElementWriter.WriteMode.e_overlay,!1)];case 14:return _state.sent(),[4,elementBuilder.createFormFromDoc(page,newDoc)];case 15:return[4,(formElement=_state.sent()).getXObject()];case 16:return[4,(xObj=_state.sent()).putRect("BBox",mediaBox.x1,mediaBox.y1,mediaBox.x2,mediaBox.y2)];case 17:return _state.sent(),_1=xObj.putMatrix,_tmp=["Matrix"],[4,Matrix2D.createIdentityMatrix()];case 18:return[4,_1.apply(xObj,_tmp.concat([_state.sent()]))];case 19:return _state.sent(),[4,elementWriter.writeElement(formElement)];case 20:return _state.sent(),_2=elementBuilder.createRect,_tmp1=[mediaBox.x1,mediaBox.y1],[4,mediaBox.width()];case 21:return _tmp1=_tmp1.concat([_state.sent()]),[4,mediaBox.height()];case 22:return[4,_2.apply(elementBuilder,_tmp1.concat([_state.sent()]))];case 23:return[4,(element=_state.sent()).setPathFill(!0)];case 24:return _state.sent(),[4,element.getGState()];case 25:return gState=_state.sent(),_3=gState.setFillColorSpace,[4,ColorSpace.createDeviceRGB()];case 26:return[4,_3.apply(gState,[_state.sent()])];case 27:return _state.sent(),_4=gState.setFillColorWithColorPt,[4,ColorPt.init(1,1,1)];case 28:return[4,_4.apply(gState,[_state.sent()])];case 29:return _state.sent(),[4,elementWriter.writeElement(element)];case 30:return _state.sent(),[4,elementBuilder.reset()];case 31:return _state.sent(),_5=elementBuilder.createRect,_tmp2=[mediaBox.x1,mediaBox.y1],[4,mediaBox.width()];case 32:return _tmp2=_tmp2.concat([_state.sent()]),[4,mediaBox.height()];case 33:return[4,_5.apply(elementBuilder,_tmp2.concat([_state.sent()]))];case 34:return[4,(element=_state.sent()).setPathFill(!0)];case 35:return _state.sent(),[4,element.setPathStroke(!1)];case 36:return _state.sent(),[4,element.getGState()];case 37:return[4,(gState=_state.sent()).setBlendMode(GState.BlendMode.e_bl_darken)];case 38:return _state.sent(),_6=gState.setFillColorSpace,[4,ColorSpace.createDeviceGray()];case 39:return[4,_6.apply(gState,[_state.sent()])];case 40:return _state.sent(),_7=gState.setFillColorWithColorPt,[4,ColorPt.init(0)];case 41:return[4,_7.apply(gState,[_state.sent()])];case 42:return _state.sent(),_tmp3=[newDoc,mediaBox],[4,Matrix2D.createIdentityMatrix()];case 43:return[4,createLuminositySoftMask.apply(void 0,_tmp3.concat([_state.sent(),xObj]))];case 44:return softMask=_state.sent(),[4,gState.setSoftMask(softMask)];case 45:return _state.sent(),[4,elementWriter.writeElement(element)];case 46:return _state.sent(),[4,elementWriter.end()];case 47:return _state.sent(),[4,newPage.setCropBox(cropBox)];case 48:return _state.sent(),[4,newDoc.pagePushBack(newPage)];case 49:_state.sent(),_state.label=50;case 50:return[4,itr.next()];case 51:return _state.sent(),[3,4];case 52:return[2,window.Core.createDocument(newDoc)]}}))}));return function convertToGrayscaleDocument(pdfDocument){return _ref.apply(this,arguments)}}(),createLuminositySoftMask=function(){var _ref=_async_to_generator((function(doc,boundingBox,matrix,xObj){var group,mask,tr,array1,array2,grayscaleDarknessFactor;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,xObj.putRect("BBox",boundingBox.x1,boundingBox.y1,boundingBox.x2,boundingBox.y2)];case 1:return _state.sent(),[4,xObj.putDict("Group")];case 2:return group=_state.sent(),[4,xObj.putMatrix("Matrix",matrix)];case 3:return _state.sent(),[4,group.putName("S","Transparency")];case 4:return _state.sent(),[4,group.putName("CS","DeviceGray")];case 5:return _state.sent(),[4,group.putBool("I",!0)];case 6:case 11:return _state.sent(),[4,doc.createIndirectDict()];case 7:return[4,(mask=_state.sent()).putName("S","Luminosity")];case 8:return _state.sent(),[4,mask.put("G",xObj)];case 9:return _state.sent(),[4,mask.putArray("BC")];case 10:return[4,_state.sent().pushBackNumber(1)];case 12:return[4,(tr=_state.sent()).putNumber("FunctionType",2)];case 13:return _state.sent(),[4,tr.putArray("Domain")];case 14:return[4,(array1=_state.sent()).pushBackNumber(0)];case 15:return _state.sent(),[4,array1.pushBackNumber(1)];case 16:return _state.sent(),[4,tr.putArray("Range")];case 17:return[4,(array2=_state.sent()).pushBackNumber(0)];case 18:return _state.sent(),[4,array2.pushBackNumber(1)];case 19:return _state.sent(),grayscaleDarknessFactor=(0,printGrayscaleDarknessFactor.e)(),[4,tr.putNumber("N",grayscaleDarknessFactor)];case 20:return _state.sent(),[4,tr.putArray("C0")];case 21:return[4,_state.sent().pushBackNumber(1)];case 22:return _state.sent(),[4,tr.putArray("C1")];case 23:return[4,_state.sent().pushBackNumber(0)];case 24:return _state.sent(),[4,mask.put("TR",tr)];case 25:return _state.sent(),[2,mask]}}))}));return function createLuminositySoftMask(doc,boundingBox,matrix,xObj){return _ref.apply(this,arguments)}}(),createDocumentForPrint=function(){var _ref=_async_to_generator((function(document,fileDataOptions){var fileData,blob;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,document.getFileData(fileDataOptions)];case 1:return fileData=_state.sent(),blob=new Blob([fileData],{type:"application/pdf"}),[4,window.Core.createDocument(blob,{extension:"pdf"})];case 2:return[2,_state.sent()]}}))}));return function createDocumentForPrint(document,fileDataOptions){return _ref.apply(this,arguments)}}(),PrintModal=__webpack_require__("./src/components/PrintModal/PrintModal.js");__webpack_require__("./src/components/PrintModal/PrintModal.scss");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function PrintModalContainer_asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function PrintModalContainer_async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){PrintModalContainer_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){PrintModalContainer_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function PrintModalContainer_ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}var PrintModalContainer=function(){var dispatch=(0,es.wA)(),_useSelector=_sliced_to_array((0,es.d4)((function(state){return[selectors.A.isElementDisabled(state,dataElement.A.PRINT_MODAL),selectors.A.isElementOpen(state,dataElement.A.PRINT_MODAL),selectors.A.isElementDisabled(state,"applyWatermark"),selectors.A.getCurrentPage(state),selectors.A.getPrintQuality(state),selectors.A.getDefaultPrintOptions(state),selectors.A.getPageLabels(state,"pageLabels"),selectors.A.getSortStrategy(state),selectors.A.getColorMap(state),selectors.A.getDisplayMode(state),selectors.A.getPrintedNoteDateFormat(state),selectors.A.getCurrentLanguage(state),selectors.A.getWatermarkModalOptions(state),selectors.A.getTimezone(state),selectors.A.isEmbedPrintSupported(state,"useEmbeddedPrint")]}),es.bN),15),isDisabled=_useSelector[0],isOpen=_useSelector[1],isApplyWatermarkDisabled=_useSelector[2],currentPage=_useSelector[3],printQuality=_useSelector[4],defaultPrintOptions=_useSelector[5],pageLabels=_useSelector[6],sortStrategy=_useSelector[7],colorMap=_useSelector[8],layoutMode=_useSelector[9],printedNoteDateFormat=_useSelector[10],language=_useSelector[11],watermarkModalOptions=_useSelector[12],timezone=_useSelector[13],useEmbeddedPrint=_useSelector[14],existingWatermarksRef=(0,react.useRef)(),_useState=_sliced_to_array((0,react.useState)(!1),2),allowWatermarkModal=_useState[0],setAllowWatermarkModal=_useState[1],_useState1=_sliced_to_array((0,react.useState)(-1),2),count=_useState1[0],setCount=_useState1[1],_useState2=_sliced_to_array((0,react.useState)(!1),2),maintainPageOrientation=_useState2[0],setMaintainPageOrientation=_useState2[1],_useState3=_sliced_to_array((0,react.useState)([]),2),pagesToPrint=_useState3[0],setPagesToPrint=_useState3[1],_useState4=_sliced_to_array((0,react.useState)(!1),2),isGrayscale=_useState4[0],setIsGrayscale=_useState4[1],_useState5=_sliced_to_array((0,react.useState)(!1),2),isWatermarkModalVisible=_useState5[0],setIsWatermarkModalVisible=_useState5[1],_useState6=_sliced_to_array((0,react.useState)(!0),2),includeAnnotations=_useState6[0],setIncludeAnnotations=_useState6[1],_useState7=_sliced_to_array((0,react.useState)(!1),2),includeComments=_useState7[0],setIncludeComments=_useState7[1],_useState8=_sliced_to_array((0,react.useState)(!1),2),isCurrentView=_useState8[0],setIsCurrentView=_useState8[1],_useState9=_sliced_to_array((0,react.useState)(!1),2),isCurrentViewDisabled=_useState9[0],setIsCurrentViewDisabled=_useState9[1];(0,react.useEffect)((function(){var _defaultPrintOptions_includeAnnotations,_defaultPrintOptions_includeComments,_defaultPrintOptions_maintainPageOrientation;defaultPrintOptions&&(setIncludeAnnotations(null!==(_defaultPrintOptions_includeAnnotations=defaultPrintOptions.includeAnnotations)&&void 0!==_defaultPrintOptions_includeAnnotations?_defaultPrintOptions_includeAnnotations:includeAnnotations),setIncludeComments(null!==(_defaultPrintOptions_includeComments=defaultPrintOptions.includeComments)&&void 0!==_defaultPrintOptions_includeComments?_defaultPrintOptions_includeComments:includeComments),setMaintainPageOrientation(null!==(_defaultPrintOptions_maintainPageOrientation=defaultPrintOptions.maintainPageOrientation)&&void 0!==_defaultPrintOptions_maintainPageOrientation?_defaultPrintOptions_maintainPageOrientation:maintainPageOrientation))}),[defaultPrintOptions]);var isPrinting=count>=0;(0,react.useEffect)((function(){isOpen&&(useEmbeddedPrint&&checkCurrentView(),dispatch(actions.A.closeElements([dataElement.A.SIGNATURE_MODAL,dataElement.A.LOADING_MODAL,dataElement.A.PROGRESS_MODAL,dataElement.A.ERROR_MODAL])))}),[isOpen,dispatch]);var checkCurrentView=function(){if(!isCurrentViewDisabled){var visiblePagesArray=core.A.getDisplayModeObject().getVisiblePages(0,0);(null==visiblePagesArray?void 0:visiblePagesArray.length)>1?setIsCurrentViewDisabled(!0):setIsCurrentViewDisabled(!1)}},embeddedPrinting=function(){var _ref=PrintModalContainer_async_to_generator((function(windowRef){var document,annotManager,pdf;return PrintModalContainer_ts_generator(this,(function(_state){switch(_state.label){case 0:return pagesToPrint.length<1?[2]:(document=core.A.getDocument(),annotManager=core.A.getAnnotationManager(),[4,createPages(document,annotManager,pagesToPrint,{isCurrentView,includeAnnotations,includeComments},watermarkModalOptions)]);case 1:return pdf=_state.sent(),isGrayscale?[4,convertToGrayscaleDocument(pdf)]:[3,3];case 2:pdf=_state.sent(),_state.label=3;case 3:return function(pdfDocument,windowRef){pdfDocument.getFileData({printDocument:!0}).then((function(data){var arr=new Uint8Array(data),blob=new Blob([arr],{type:"application/pdf"}),printHandler=(0,getRootNode.Ay)().getElementById("print-handler");if(printHandler.src=URL.createObjectURL(blob),!windowRef)return new Promise((function(resolve){var loadListener=function loadListener1(){printHandler.contentWindow.print(),printHandler.removeEventListener("load",loadListener),resolve()};printHandler.addEventListener("load",loadListener)}));windowRef.location.href=printHandler.src,setTimeout((function(){windowRef.print()}),100)})).catch((function(error){return console.error("Print Error status: ",error)}))}(pdf,windowRef),[2]}}))}));return function embeddedPrinting(windowRef){return _ref.apply(this,arguments)}}(),rasterPrinting=function(e){if(e.preventDefault(),!(pagesToPrint.length<1)){setCount(0),allowWatermarkModal?core.A.setWatermark(watermarkModalOptions):core.A.setWatermark(existingWatermarksRef.current);var printOptions={includeComments,includeAnnotations,maintainPageOrientation,printQuality,sortStrategy,colorMap,printedNoteDateFormat,isCurrentView,language,timezone,createCanvases:!1,isGrayscale},createPages=(0,rasterPrint.CB)(pagesToPrint,printOptions,void 0);createPages.forEach(function(){var _ref=PrintModalContainer_async_to_generator((function(pagePromise){return PrintModalContainer_ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,pagePromise];case 1:return _state.sent(),setCount(count<pagesToPrint.length&&(-1!==count?count+1:count)),[2]}}))}));return function(pagePromise){return _ref.apply(this,arguments)}}()),Promise.all(createPages).then((function(pages){(0,print.g)(pages),closePrintModal()})).catch((function(e){console.error(e),setCount(-1)}))}},closePrintModal=function(){setCount(-1),dispatch(actions.A.closeElement(dataElement.A.PRINT_MODAL))};return react.createElement(PrintModal.A,{isDisabled,isOpen,isApplyWatermarkDisabled,isFullAPIEnabled:core.A.isFullPDFEnabled(),currentPage,printQuality,isGrayscale,setIsGrayscale,setIsCurrentView,isCurrentViewDisabled,checkCurrentView,includeAnnotations,setIncludeAnnotations,includeComments,setIncludeComments,isWatermarkModalVisible,setIsWatermarkModalVisible,watermarkModalOptions,existingWatermarksRef,setAllowWatermarkModal,closePrintModal,createPagesAndPrint:function(e){var fileType=core.A.getDocument().getType();useEmbeddedPrint&&"xod"===fileType&&console.warn("Falling back to raster printing, XOD files and Embedded Printing is not supported"),useEmbeddedPrint&&"xod"!==fileType?embeddedPrinting(device.un&&device.nr?window.open():null):rasterPrinting(e)},pagesToPrint,setPagesToPrint,count,isPrinting,pageLabels,layoutMode,useEmbeddedPrint})};const PrintModal_PrintModalContainer=PrintModalContainer;PrintModalContainer.__docgenInfo={description:"",methods:[],displayName:"PrintModalContainer"};const components_PrintModal=PrintModal_PrintModalContainer;PrintModal_PrintModalContainer.__docgenInfo={description:"",methods:[],displayName:"PrintModalContainer"}}}]);