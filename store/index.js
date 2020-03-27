import {
  SET_CATEGORIES,
  SET_ERROR
} from '~/store/mutations.js';

export const state = () => ({
  isLoggedIn: false,
  categories: [],
  error: ''
});

export const getters = {
  IS_LOGGED_IN: state => state.isLoggedIn,
  CATEGORIES: state => state.categories,
  ERROR: state => state.error
};

export const mutations = {
  [SET_CATEGORIES](state, data) { state.categories = data; },
  [SET_ERROR](state, data) { state.error = data; },
};

export const actions = {
  setError({commit}, error) { commit(SET_ERROR, error); }
};
