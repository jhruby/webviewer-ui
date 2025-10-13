/**
 * Sets the Limit Annotation Highlight Text flag
 * @method UI.setLimitAnnotationHighlightText
 * @param {boolean} limitAnnotationHighlightText Is Limit Annotation Highlight Text enabled or not
 * @example
 WebViewer(...)
 .then(function(instance) {
    instance.UI.setLimitAnnotationHighlightText(true);
  });
 */

import actions from 'actions';

export default store => limitAnnotationHighlightText => {
    store.dispatch(actions.setLimitAnnotationHighlightText(limitAnnotationHighlightText));
};
