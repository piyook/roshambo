import { createStore } from 'vuex';
import rootMutations from "./rootMutations.js";
import rootGetters from "./rootGetters.js";
import rootActions from "./rootActions.js";

import auth from "@/store/modules/Auth";
import api from "@/store/modules/Api";


export default createStore({
  state: {
  },
  getters: rootGetters,
  mutations: rootMutations,
  actions: rootActions,
  modules: {
    auth,
    api,
  }
})
