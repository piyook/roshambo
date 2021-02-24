import { createStore } from 'vuex';
import rootMutations from "./rootMutations.js";
import rootGetters from "./rootGetters.js";
import rootActions from "./rootActions.js";

import auth from "@/store/modules/Auth";
import api from "@/store/modules/Api";
import modal from "@/store/modules/Modal";


export default createStore({
  state() {
    return {
      isLoading: false,
    };
  },
  getters: rootGetters,
  mutations: rootMutations,
  actions: rootActions,
  modules: {
    auth,
    api,
    modal,
  }
})
