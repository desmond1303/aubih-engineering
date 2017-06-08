import Ember from 'ember';

export default Ember.Mixin.create({

  compare: function (a, b) {
    let o1 = a.toLowerCase();
    let o2 = b.toLowerCase();

    if (o1 < o2) {
      return -1;
    }

    if (o1 > o2) {
      return 1;
    }

    return 0;
  },

});
