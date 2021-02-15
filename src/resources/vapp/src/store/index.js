import { createStore } from 'vuex';
import rootMutations from "./rootMutations.js";
import rootGetters from "./rootGetters.js";
import rootActions from "./rootActions.js";

import auth from "@/store/modules/Auth";


export default createStore({
  state: {
    isLoggedIn:false,
  },
  getters: rootGetters,
  mutations: rootMutations,
  actions: rootActions,
  modules: {
    auth,
  }
})
