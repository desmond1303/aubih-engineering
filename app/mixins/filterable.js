import Ember from 'ember';

export default Ember.Mixin.create({

  filterBy: function () {
    let args = Array.prototype.slice.call(arguments);
    let item = '';
    let property = '';

    if (args.length > 2) {
      item = args.shift();
      property = args.shift();
    } else {
      throw new Error('Must pass at least three Paramters');
    }

    let found = false;
    args.forEach(arg => {
      found = found || item[property].indexOf(arg) !== -1;
    });

    return found;
  },

});
