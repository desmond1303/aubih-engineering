import Ember from 'ember';

const {
  computed,
  String: {
    htmlSafe,
  },
} = Ember;

export default Ember.Component.extend({
  classNames: ['in-text-banner-view'],

  image: null,

  backgroundImage: computed('image', function () {
    let image = this.get('image');
    if (image) {
      return htmlSafe('background-image: url(' + this.get('image') + ')');
    }
  }),

});
