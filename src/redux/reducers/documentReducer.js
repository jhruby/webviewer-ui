export default (initialState) => (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_DOCUMENT_FILE':
      return { ...state, file: payload.documentFile, path: payload.documentFile.name, pdfDoc: null };
    case 'SET_PAGE_NUMBER':
      return { ...state, pageNumber: payload.documentPageNumber };
    case 'SET_TOTAL_PAGES':
      return {
        ...state,
        totalPages: {
          ...state.totalPages,
          [payload.documentViewerKey]: payload.totalPages,
        }
      };
    case 'SET_OUTLINES':
      return { ...state, outlines: payload.outlines };
    case 'SET_BOOKMARKS':
    {
      return { ...state, bookmarks: payload.bookmarks };
    }
    case 'SET_PORTFOLIO':
      return { ...state, portfolio: payload.portfolio };
    case 'SET_LAYERS':
      return { ...state, layers: payload.layers };
    case 'SET_PASSWORD_ATTEMPTS':
      return { ...state, passwordAttempts: payload.attempt };
    case 'SET_PRINT_QUALITY':
      return { ...state, printQuality: payload.quality };
    case 'SET_DEFAULT_PRINT_OPTIONS':
      return { ...state, defaultPrintOptions: payload.options };
    case 'SET_LOADING_PROGRESS':
      return { ...state, loadingProgress: payload.progress };
    case 'SET_PRINT_PAGE_LIMIT':
      return { ...state, printPageLimit: payload.limit }
    case 'SET_CONTENT_USER_ID':
      return { ...state, contentUserId: payload.contentUserId }
    case 'SET_RIGHT_TO_LEFT_SEARCH':
      return { ...state, allowRightToLeftSearch: payload.allowRightToLeftSearch }
    case 'SET_COPY_ENABLED':
      return { ...state, copyEnabled: payload.copy }
    case 'SET_LIMIT_ANNOTATION_HIGHLIGHT_TEXT':
      return { ...state, limitAnnotationHighlightText: payload.limitAnnotationHighlightText }
    case 'SET_DISABLED_PRINT_RANGE':
      return { ...state, disabledPrintRange: payload.disabledPrintRange }
    case 'SET_PRINT_VALIDATION':
      return { ...state, printValidation: payload.printValidation }
    default:
      return state;
  }
};
