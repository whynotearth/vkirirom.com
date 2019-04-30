import * as constants from './types';
// import axios from 'axios'

export default {
  [constants.SET_RECENT_SEARCH_LIST]({ commit }, value) {
    commit(constants.SET_RECENT_SEARCH_LIST, value);
  },
};
