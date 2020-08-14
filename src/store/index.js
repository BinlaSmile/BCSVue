import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isCollapse: false
  },
  mutations: {
    updateIsCollapse(state, obj) {
      state.isCollapse = obj.isCollapse;
    }
  },
  actions: {},
  modules: {}
});
