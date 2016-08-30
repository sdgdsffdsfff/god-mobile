'use strict';

export default {
  '/': {
    name: 'monitor',
    component: require('src/pages/monitor')
  },
  '/report': {
    name: 'report',
    component: require('src/pages/report')
  },
  '/profile': {
    name: 'profile',
    component: require('src/pages/profile')
  },
  '/profile/detail': {
    name: 'detail',
    component: require('src/pages/profile/detail')
  }
};
