import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['footer-view'],

  usefulLinks: [
    {
      title: 'About AUBiH',
      link: '#',
    }, {
      title: 'AUBiH Online',
      link: '#',
    }, {
      title: 'AUBiH TV',
      link: '#',
    }, {
      title: 'AUBiH Online Store',
      link: '#',
    }, {
      title: 'Contact Us',
      link: '#',
    },
  ],

  latestNews: [
    {
      title: 'BIT Alliance and AUBiH Cooperation',
      timestamp: '17th April, 2017',
      img: '',
      link: '#',
    }, {
      title: 'Agreement on cooperation',
      timestamp: '12th April, 2017',
      img: '',
      link: '#',
    }, {
      title: 'Our reform of Education',
      timestamp: '7th April, 2017',
      img: '',
      link: '#',
    },
  ],

});
