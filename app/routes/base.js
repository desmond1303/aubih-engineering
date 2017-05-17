import Ember from 'ember';
import Constants from './../configuration/constants';

export default Ember.Route.extend({

  beforeModel: function () {
    window.scrollTo(0, 0);
  },

  afterModel: function () {
    let route = this.get('routeName');
    let routeName = this._resolveRouteName(route);
    this.controllerFor('application').set('_router', this.get('router.router.recognizer.names'));
    this.controllerFor(route).set('routeName', routeName);
  },

  renderTemplate: function (controller) {
    this.render();

    this.render('page-title', {
      outlet: 'pageTitle',
      controller: controller,
    });
  },

  _resolveRouteName: function (route) {
    let parts = route.split('.');
    let routeName = Constants.routeTitles;
    parts.forEach(part => {
      routeName = routeName[part];
    });

    return routeName;
  },

});
