import Ember from 'ember';
import Constants from './../configuration/constants';

export default Ember.Route.extend({

  beforeModel: function () {
    window.scrollTo(0, 0);
  },

  afterModel: function () {
    let route = this.get('routeName');
    let routeName = this._resolveRouteName(route);
    console.log(route, this.controllerFor(route), routeName);
    this.controllerFor(route).set('routeName', routeName);
  },

  renderTemplate: function (controller, model) {
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
