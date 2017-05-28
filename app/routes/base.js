import Ember from 'ember';
import RouteTitles from 'engineering/configuration/route-titles';

export default Ember.Route.extend({

  _topParenTitle: null,

  afterModel: function () {
    this.controllerFor('application').set('_router', this.get('router.router.recognizer.names'));

    let route = this.get('routeName');
    this.controllerFor(route).set('route', {
      title: this._resolveRouteTitle(route),
      path: route,
    });
    this.controllerFor('base').set('routePath', route.split('.'));
    this.set('_topParenTitle', route.split('.')[0]);
  },

  renderTemplate: function (controller) {
    this._super(...arguments);
    this.render('components/route-title', {
      outlet: 'routeTitle',
      into: this.get('_topParenTitle'),
      controller: 'base',
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

  actions: {

    willTransition(transition) {
      window.scrollTo(0, 0);

      let route = transition.targetName;
      if (route.endsWith('.index')) {
        route = route.substring(0, route.length - 6);
      }

      this.controllerFor('base').set('routePath', route.split('.'));
    },

  },

});
