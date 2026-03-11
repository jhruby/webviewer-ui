/**
 * Sets the copy enabled flag. 
 * @method UI.setCopyEnabled
 * @param {boolean} copy Is copy enabled or not
 * @example
 WebViewer(...)
 .then(function(instance) {
    instance.UI.setCopyEnabled(false);
  });
 */

import actions from 'actions';

export default store => copy => {
    store.dispatch(actions.setCopyEnabled(copy));
};
