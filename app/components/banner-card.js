import Ember from 'ember';

const {
  computed,
} = Ember;

export default Ember.Component.extend({

  cols: 4,

  colClass: computed('cols', function () {
    let cols = (this.get('cols') || 4) % 12;
    return 'col-xs-12 col-sm-' + (cols);
  }),

});
