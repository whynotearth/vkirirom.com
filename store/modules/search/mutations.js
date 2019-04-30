import * as constants from './types';

export default {
  [constants.SET_RECENT_SEARCH_LIST](state, value) {
    state.recentSearchList = value;
  },
};
