/**
 * Sets the print validation function.
 * @method UI.setPrintValidation
 * @param {function} print validation function. Should return true if valid.
 * @example
 WebViewer(...)
 .then(function(instance) {
    instance.UI.setPrintValidation(()=>{return true});
  });
 */

import actions from 'actions';

export default store => printValidation => {
    store.dispatch(actions.setPrintValidation(printValidation));
};
