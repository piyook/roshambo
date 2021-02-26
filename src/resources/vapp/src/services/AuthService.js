import axios from "axios";
import store from "@/store";
import {Modal} from '@/utils/modal';

const authClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: true, // required to handle the CSRF token,
});

/*
 * Add a response interceptor
 */
authClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 419)
    ) {
      if (!store.getters["auth/guest"]) {
        store.dispatch("auth/logout");
      }
      return;
    }

    if (error.response && String(error.response.status).match(/^[5]/g) ) {
    await Modal("errorModal");
    return;
    }

    return Promise.reject(error);
  }
);

export default {
  async login(payload) {
    await authClient.get("/sanctum/csrf-cookie");
    await authClient.post("/login", payload);
  },
  async logout() {
    await store.commit('api/resetSessionWinnings');
    await authClient.post("/logout");
  },
  async getAuthUser() {
    return await authClient.get("/api/users/auth");
  },
  async registerUser(payload) {
    await authClient.get("/sanctum/csrf-cookie");
    await authClient.post("/register", payload);
  },
};
