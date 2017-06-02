import Ember from 'ember';

export function notHelper(params) {
  return !params[0];
}

export default Ember.Helper.helper(notHelper);
