import Ember from 'ember';

const {
  computed,
} = Ember;

export default Ember.Component.extend({
  emailAddress: 'info@aubih.edu',

  mailTo: computed('emailAddress', function () {
    return 'mailto:' + this.get('emailAddress');
  }),

  navigationItems: [
    {
      title: 'About',
      link: '#',
      subMenu: [
        {
          title: 'About',
          links: [
            {
              title: 'Overview',
              link: '#',
            }, {
              title: 'Mission & Vision',
              link: '#',
            }, {
              title: 'The Values of Study',
              link: '#',
            },
          ],
        }, {
          title: 'Management',
          links: [
            {
              title: 'Rector\'s message',
              link: '#',
            },
          ],
        }, {
          title: 'Partnerships',
          links: [
            {
              title: 'Rector\'s message',
              link: '#',
            },
          ],
        }, {
          title: 'Employment',
          links: [
            {
              title: 'Rector\'s message',
              link: '#',
            },
          ],
        },
      ],
    }, {
      title: 'Online',
      link: '#',
      subMenu: [],
    }, {
      title: 'Academics',
      link: '#',
      subMenu: [],
    }, {
      title: 'Degree',
      link: '#',
      subMenu: [],
    }, {
      title: 'Students',
      link: '#',
      subMenu: [],
    }, {
      title: 'Admission',
      link: '#',
      subMenu: [],
    }, {
      title: 'Global',
      link: '#',
      subMenu: [],
    }, {
      title: 'Career',
      link: '#',
      subMenu: [],
    }, {
      title: 'Research',
      link: '#',
      subMenu: [],
    }, {
      title: 'Academy',
      link: '#',
      subMenu: [],
    }, {
      title: 'Innovations',
      link: '#',
      subMenu: [],
    }, {
      title: 'Alumni',
      link: '#',
      subMenu: [],
    }, {
      title: 'News',
      link: '#',
      subMenu: [],
    }, {
      title: 'Contact',
      link: '#',
      subMenu: [],
    },
  ],

});
