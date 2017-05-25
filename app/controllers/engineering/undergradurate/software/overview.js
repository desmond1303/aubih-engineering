import Ember from 'ember';

const {
  computed,
} = Ember;

export default Ember.Controller.extend({

  testRouteName: function () {
    console.log(this.get('routeName'));
  }.observes('routeName'),

});
