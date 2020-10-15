import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images:[],
    searchText:''
  },
  mutations: {
    setImage(state, payload){
      state.images = payload
      console.log('success!')
    },
    setSearchText(state, payload){
      state.searchText = payload
    }
  },
  actions: {},
  modules: {}
});
