import Ember from 'ember';
import RouteTitles from 'engineering/configuration/route-titles';

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
    this.render('page-title', {
      outlet: 'pageTitle',
      controller: controller,
    });

    this.render();
  },

  _resolveRouteName: function (route) {
    let parts = route.split('.');
    let routeName = RouteTitles;
    parts.forEach(part => {
      routeName = routeName[part];
    });

    return routeName;
  },

});
