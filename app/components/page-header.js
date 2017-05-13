import Ember from 'ember';
import Constants from './../configuration/constants';

const {
  computed,
} = Ember;

export default Ember.Component.extend({
  emailAddress: 'info@aubih.edu',

  mailTo: computed('emailAddress', function () {
    return 'mailto:' + this.get('emailAddress');
  }),

  navigationItems: Constants.header.navigationItems,
});
