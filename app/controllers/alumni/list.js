import Ember from 'ember';
import AlumniList from './../../configuration/alumni/list';

const {
  computed,
} = Ember;

export default Ember.Controller.extend({

  alumni: computed(function () {
    return AlumniList.sort(this.compareNames);
  }),

  compareNames: function (a, b) {
    let nameOne = a.name.toLowerCase();
    let nameTwo = b.name.toLowerCase();

    if (nameOne < nameTwo) {
      return -1;
    }

    if (nameOne > nameTwo) {
      return 1;
    }

    return 0;
  },

});
