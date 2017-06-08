import Ember from 'ember';
import Base from 'engineering/controllers/base';
import Sortable from 'engineering/mixins/sortable';
import AlumniList from 'engineering/configuration/alumni/list';

const {
  computed,
} = Ember;

export default Base.extend(Sortable, {
  breadCrumb: 'List',

  alumni: computed(function () {
    return AlumniList.sort((a, b) => this.compare(a.name, b.name));
  }),

});
