import Ember from 'ember';

const {
  computed,
  String: {
    htmlSafe,
  },
} = Ember;

export default Ember.Component.extend({
  classNames: ['in-text-banner-view'],
  classNameBindings: ['noFilter:no-filter'],
  attributeBindings: ['background:style'],

  noFilter: false,

  image: null,

  background: computed('image', function () {
    let image = this.get('image');
    if (image) {
      return htmlSafe('background-image: url(' + this.get('image') + ')');
    }
  }),

});
