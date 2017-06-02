import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['page-banner-view'],
  classNameBindings: ['filter'],

  filter: 'full-filter',

  parallaxSpeed: 0.2,
});
