/**
 * Sets the unique content user ID.
 * @method UI.setContentUserId
 * @param {string} id The unique content user ID.
 * @example
 WebViewer(...)
 .then(function(instance) {
 instance.UI.setContentUserId(true);
 });
 */

import actions from 'actions';

export default store => id => {
    store.dispatch(actions.setContentUserId(id));
};