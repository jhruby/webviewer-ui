/**
 * Sets languages which user can select from
 * @method UI.setAvailableLanguages
 * @param {string[]} availableLanguages Value
 * @example
 WebViewer(...)
 .then(function(instance) {
    instance.UI.setAvailableLanguages(["en","fr"]);
  });
 */

import actions from 'actions';

export default store => availableLanguages => {
    store.dispatch(actions.setAvailableLanguages(availableLanguages));
};
