import axios from "axios";
import store from "@/store";
import {Modal} from '@/utils/modal';


const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: true, // required to handle the CSRF token,
});

/*
 * Add a response interceptor
 */
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    await Modal("errorModal");
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
  async game(payload) {
    await apiClient.get("/sanctum/csrf-cookie");
    const results = await apiClient.post("/api/game", 
      
        {userGuess: payload.userGuess,
        userStake: payload.userStake,
       } 

      )
      
    return results.data;
  },
 
  async getScore(payload){
    await apiClient.get("/sanctum/csrf-cookie");
    const results = await apiClient.get(
      "/api/hiscores/"+payload.userId, 
       );
    return results.data;
  },

  async getHiscores(){
    await apiClient.get("/sanctum/csrf-cookie");
    const results = await apiClient.get(
      "/api/hiscores", 
       );
    return results.data;
  },

  async bankReset(){
    await apiClient.get("/sanctum/csrf-cookie");
    await apiClient.post("/api/hiscores");
  }
};
