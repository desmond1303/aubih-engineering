import Ember from 'ember';

export function isLocalLink(params) {
  let routes = params[0];
  let currentRoute = params[1];

  return Object.hasOwnProperty.call(routes, currentRoute);
}

export default Ember.Helper.helper(isLocalLink);
