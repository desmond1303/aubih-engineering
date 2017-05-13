import Ember from 'ember';
import Constants from './../../configuration/constants';

export default Ember.Controller.extend({
  sideNavigationItems: Constants.main.index.sideNavigationItems,
});
