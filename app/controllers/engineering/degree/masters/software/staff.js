import Ember from 'ember';
import Sortable from 'engineering/mixins/sortable';
import Filterable from 'engineering/mixins/filterable';
import StaffList from 'engineering/configuration/staff/list';

const {
  computed,
} = Ember;

export default Ember.Controller.extend(Sortable, Filterable, {
  breadCrumb: 'Faculty & Staff',

  staff: computed(function () {
    return StaffList
      .filter(member => this.filterBy(member, 'speciality', 'Computer', 'Information', 'Technology'))
      .sort((a, b) => this.compare(a.name, b.name));
  }),
});
