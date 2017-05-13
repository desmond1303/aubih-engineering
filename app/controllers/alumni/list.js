import Ember from 'ember';
import Constants from './../../configuration/constants';

export default Ember.Controller.extend({
  alumni: Constants.main.alumni.list,
});
