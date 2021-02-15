import axios from "axios";
import store from "@/store";

export const authClient = axios.create({
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
  function (error) {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 419)
    ) {
      if (!store.getters["auth/guest"]) {
        store.dispatch("auth/logout");
      }
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
