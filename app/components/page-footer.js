import Ember from 'ember';
import MiscellaneousData from './../configuration/footer/misc';

export default Ember.Component.extend({
  classNames: ['footer-view'],

  usefulLinks: MiscellaneousData.usefulLinks,
  latestNews: MiscellaneousData.latestNews,

});
