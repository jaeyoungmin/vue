import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images:[]
  },
  mutations: {
    setImage(state, payload){
      state.images = payload
      console.log('success!')
    }
  },
  actions: {},
  modules: {}
});
