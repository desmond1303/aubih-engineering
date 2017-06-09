import Ember from 'ember';
import Sortable from 'engineering/mixins/sortable';
import AlumniList from 'engineering/configuration/alumni/list';

const {
  computed,
} = Ember;

export default Ember.Controller.extend(Sortable, {
  breadCrumb: 'Alumni',

  alumni: computed(function () {
    return AlumniList.sort((a, b) => this.compare(a.name, b.name));
  }),
});
