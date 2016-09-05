'use strict';

export default {
  '/monitor': {
    name: 'monitor',
    component: require('src/pages/monitor/')
  },
  '/monitor/:site': {
    name: 'monitorDetail',
    component: require('src/pages/monitor/detail')
  },
  '/report': {
    name: 'report',
    component: require('src/pages/report/')
  },
  '/report/:site': {
    name: 'reportDetail',
    component: require('src/pages/report/detail')
  },
  '/profile': {
    name: 'profile',
    component: require('src/pages/profile/')
  },
  '/profile/about': {
    name: 'about',
    component: require('src/pages/profile/about')
  },
  '/profile/detail': {
    name: 'profileDetail',
    component: require('src/pages/profile/detail')
  }
};
