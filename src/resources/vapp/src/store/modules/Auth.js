import router from "@/router";
import { getError } from "@/utils/helpers";
import AuthService from "@/services/AuthService";


export default {

  namespaced : true,

  state() {
          return {
            user: false,
            loading: false,
            error: null,
          }
  },

  mutations: {

    SET_USER(state, user) {
      state.user = user;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },

  },

  actions:{

    logout({ commit }) {
      return AuthService.logout()
        .then(() => {
          commit("SET_USER", false);
          window.localStorage.setItem("guest", true);
        })
        .then(() => {
          router.push({ path: "/login" });
        })
        .catch((error) => {
          commit("SET_ERROR", getError(error));
        });
    },
    getAuthUser({ commit }) {
      commit("SET_LOADING", true);
      return AuthService.getAuthUser()
        .then((response) => {

         alert(response.data.name);
          commit("SET_USER", response.data.name);
          commit("SET_LOADING", false);
        })
        .catch((error) => {
          commit("SET_LOADING", false);
          commit("SET_USER", false);
          commit("SET_ERROR", getError(error));
        });
    },
    setGuest(context, { value }) {
      window.localStorage.setItem("guest", value);
    },

  },

  getters:{

    authUser: (state) => {
      return state.user;
    },
    isAdmin: (state) => {
      return state.user ? state.user.isAdmin : false;
    },
    error: (state) => {
      return state.error;
    },
    loading: (state) => {
      return state.loading;
    },
    loggedIn: (state) => {
      return !!state.user;
    },
    guest: () => {
      return JSON.parse(window.localStorage.getItem("guest"));
    },

  }
  
  
}

