import Base from 'engineering/controllers/base';
import subNavigationItems from 'engineering/configuration/sub-navigation/engineering';

export default Base.extend({
  breadCrumb: 'College of Engineering',

  subNavigationItems: subNavigationItems,
});
