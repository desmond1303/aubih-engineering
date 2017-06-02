import Ember from 'ember';

export default Ember.Route.extend({
  afterModel: function () {
    this.controllerFor('application').set('_router', this.get('router.router.recognizer.names'));
  },

  actions: {
    willTransition(transition) {
      window.scrollTo(0, 0);
    },
  },
});
