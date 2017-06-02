import Base from 'engineering/controllers/base';
import subNavigationItems from 'engineering/configuration/sub-navigation/alumni';

export default Base.extend({
  breadCrumb: 'Alumni',

  subNavigationItems: subNavigationItems,
});
