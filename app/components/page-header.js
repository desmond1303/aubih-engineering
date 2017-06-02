import Ember from 'ember';
import $ from 'jquery';
import MainNavigation from 'engineering/configuration/main-navigation';
import MiscellaneousData from 'engineering/configuration/header/misc';

const {
  computed,
} = Ember;

export default Ember.Component.extend({
  navigationItems: MainNavigation,
  socialLinks: MiscellaneousData.socialLinks,
  emailAddress: MiscellaneousData.emailAddress,

  mailTo: computed('emailAddress', function () {
    return 'mailto:' + this.get('emailAddress');
  }),

  sidebarToggleIcon: 'bars',

  actions: {
    toggleSidebar: function () {
      let $sidebar = $('.bottom');
      let $button = $('.menu-button');
      if ($sidebar.hasClass('visible')) {
        this.set('sidebarToggleIcon', 'bars');

        $sidebar.animate({ left: '-220px' }, 500, function () {
          $sidebar.removeClass('visible');
          $sidebar.css({ left: '' });
        });

        $button.animate({ left: '5px' }, 500);
      } else {
        this.set('sidebarToggleIcon', 'times');

        $sidebar.animate({ left: '0px' }, 500, function () {
          $sidebar.addClass('visible');
          $sidebar.css({ left: '' });
        });

        $button.animate({ left: '225px' }, 500);
      }
    },
  },

});
