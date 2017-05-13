import Ember from 'ember';
import Constants from './../configuration/constants';

const {
  computed,
} = Ember;

export default Ember.Component.extend({
  navigationItems: Constants.header.navigationItems,
  emailAddress: Constants.header.emailAddress,

  mailTo: computed('emailAddress', function () {
    return 'mailto:' + this.get('emailAddress');
  }),

});
