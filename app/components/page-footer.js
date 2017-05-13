import Ember from 'ember';
import Constants from './../configuration/constants';

export default Ember.Component.extend({
  classNames: ['footer-view'],

  usefulLinks: Constants.footer.usefulLinks,
  latestNews: Constants.footer.latestNews,

});
