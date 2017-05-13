import Ember from 'ember';

const {
  String: {
    htmlSafe,
  },
} = Ember;

export function backgroundImage(params) {
  return htmlSafe('background-image: url(' + params[0] + ')');
}

export default Ember.Helper.helper(backgroundImage);
