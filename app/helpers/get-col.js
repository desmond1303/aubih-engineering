import Ember from 'ember';

export function getCol(params) {
  let count = params[0].length;
  let acceptableCounts = [1, 2, 3, 4, 6];

  if (acceptableCounts.indexOf(count) !== 0) {
    return 'col-xs-' + (12 / count);
  } else {
    return 'col-xs-12';
  }
}

export default Ember.Helper.helper(getCol);
