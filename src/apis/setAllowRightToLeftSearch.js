/**
 * Allows the right to left search.
 * @method UI.setAllowRightToLeftSearch
 * @param {boolean} allow Flag to allow right to left search.
 * @example
 WebViewer(...)
 .then(function(instance) {
    instance.UI.setAllowRightToLeftSearch(true);
  });
 */

import actions from 'actions';

export default store => allow => {
    store.dispatch(actions.setAllowRightToLeftSearch(allow));
};
