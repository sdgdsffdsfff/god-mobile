'use strict';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  user: {},
  sites: []
};

const mutations = {
  SET_USER(state, user) {
    state.user = {
      name: user.name,
      mobile: user.mobile,
      email: user.email,
      dayReport: user.dayReport,
      errorReport: user.errorReport
    };
    state.sites = user.site;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
