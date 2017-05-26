import Ember from 'ember';
import RouteTitles from 'engineering/configuration/route-titles';

export default Ember.Route.extend({

  _topParenTitle: null,

  beforeModel: function () {
    window.scrollTo(0, 0);
  },

  afterModel: function () {
    this.controllerFor('application').set('_router', this.get('router.router.recognizer.names'));

    let route = this.get('routeName');
    this.controllerFor(route).set('routeTitle', this._resolveRouteTitle(route));
    this.set('_topParenTitle', route.split('.')[0]);
  },

  renderTemplate: function (controller) {
    this._super(...arguments);
    this.render('components/route-title', {
      outlet: 'routeTitle',
      into: this.get('_topParenTitle'),
    });
  },

  _resolveRouteTitle: function (route) {
    let parts = route.split('.');
    let routeTitle = RouteTitles;
    parts.forEach(part => {
      routeTitle = routeTitle[part];
    });

    return routeTitle.title;
  },

});
