import Ember from 'ember';

const {
  computed,
} = Ember;

export default Ember.Component.extend({
  emailAddress: 'info@aubih.edu',

  mailTo: computed('emailAddress', function () {
    return 'mailto:' + this.get('emailAddress');
  }),

});
