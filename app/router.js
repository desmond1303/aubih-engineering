import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('alumni', function() {
    this.route('list');
  });
  this.route('engineering', function() {});
});

export default Router;
