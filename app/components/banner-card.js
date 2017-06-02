import Ember from 'ember';

const {
  computed,
} = Ember;

export default Ember.Component.extend({

  span: 1,

  colClass: computed('span', function () {
    let span = (this.get('span') || 1) % 3;
    return 'col-xs-12 col-sm-' + (4 * span);
  }),

});
