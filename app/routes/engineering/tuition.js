import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel: function () {
    window.scrollTo(0, 0);
  },

});
