import Ember from 'ember';
import RouteNameResolver from 'engineering/mixins/route-name-resolver';

const {
  computed,
} = Ember;

export default Ember.Controller.extend(RouteNameResolver, {

  routePath: [],

  resolvedRouteTitles: computed('routePath', 'resolveRouteTitle', 'offset', function () {
    let routes = this.get('routePath');
    let current = routes[routes.length - 1];
    let offset = this.get('offset') || 2;

    return this.get('resolveRouteTitles')(current, routes, offset);
  }),

});
