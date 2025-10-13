/**
 * If true, print only allows to print current page. Default value is false.
 * @method UI.setDisabledPrintRange
 * @param {bool} disabledPrintRange Value
 * @example
 WebViewer(...)
 .then(function(instance) {
    instance.UI.setDisabledPrintRange(true);
  });
 */

import actions from 'actions';

export default store => disabledPrintRange => {
    store.dispatch(actions.setDisabledPrintRange(disabledPrintRange));
};
