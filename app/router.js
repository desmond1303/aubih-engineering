import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  this.route('alumni', function () {
    this.route('list');
  });

  this.route('engineering', function () {
    this.route('tuition');

    this.route('degree', function () {
      this.route('undergraduate', function () {
        this.route('software', function () {
          this.route('overview');
          this.route('curriculum');
          this.route('courses');
          this.route('tuition');
        });
      });

      this.route('masters', function () {
        this.route('software', function () {
          this.route('overview');
          this.route('curriculum');
          this.route('courses');
          this.route('tuition');
        });

        this.route('system', function () {
          this.route('overview');
          this.route('curriculum');
          this.route('courses');
          this.route('tuition');
        });
      });

      this.route('doctoral', function () {
        this.route('computer', function () {
          this.route('overview');
          this.route('curriculum');
          this.route('courses');
          this.route('tuition');
        });
      });
    });
  });
});

export default Router;
