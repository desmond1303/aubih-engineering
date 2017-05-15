import Ember from 'ember';
import $ from 'jquery';
import Constants from './../configuration/constants';

const {
  computed,
} = Ember;

export default Ember.Component.extend({
  socialLinks: Constants.header.socialLinks,
  navigationItems: Constants.header.navigationItems,
  emailAddress: Constants.header.emailAddress,

  mailTo: computed('emailAddress', function () {
    return 'mailto:' + this.get('emailAddress');
  }),

  sidebarToggleIcon: 'bars',

  actions: {
    toggleSidebr: function () {
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
