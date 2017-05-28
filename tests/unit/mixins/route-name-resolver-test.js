import Ember from 'ember';
import RouteNameResolverMixin from 'engineering/mixins/route-name-resolver';
import { module, test } from 'qunit';

module('Unit | Mixin | route name resolver');

// Replace this with your real tests.
test('it works', function(assert) {
  let RouteNameResolverObject = Ember.Object.extend(RouteNameResolverMixin);
  let subject = RouteNameResolverObject.create();
  assert.ok(subject);
});
