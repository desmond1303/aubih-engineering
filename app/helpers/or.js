import Ember from 'ember';

export function orHelper(params) {
  return params[0] || params[1];
}

export default Ember.Helper.helper(orHelper);
