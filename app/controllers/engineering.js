import Base from 'engineering/controllers/base';
import subNavigationItems from 'engineering/configuration/sub-navigation/engineering';

const {
  computed: {
    alias,
  },
} = Ember;

export default Base.extend({
  breadCrumb: 'College of Engineering',

  subNavigationItems: subNavigationItems,
});
