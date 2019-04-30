import Vue from 'vue';
import Vuex from 'vuex';
import Search from './modules/search';

Vue.use(Vuex);

const store = () => new Vuex.Store({
  strict: false,
  modules: {
    Search,
  },
});

export default store;
