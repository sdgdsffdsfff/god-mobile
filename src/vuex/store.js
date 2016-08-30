'use strict';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  user: {}
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
