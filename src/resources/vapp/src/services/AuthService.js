import axios from "axios";
import store from "@/store";
import { Modal } from "@/utils/modal.js";
import { Spinner } from "@/utils/spinner";

const authClient = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    withCredentials: true, // required to handle the CSRF token,
    withXSRFToken: true, // required to handle the CSRF token,
});

/*
 * Add a response interceptor
 */
authClient.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        Spinner(false);
        if (
            error.response &&
            (error.response.status === 401 || error.response.status === 419)
        ) {
            if (!store.getters["auth/guest"]) {
                store.dispatch("auth/logout");
            }
            return Promise.reject(error);
        }

        if (error.response && String(error.response.status).match(/^[5]/g)) {
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
        await store.commit("api/resetSessionWinnings");
        await authClient.post("/logout");
    },
    async getAuthUser() {
        return await authClient.get("/api/users/auth");
    },
    async registerUser(payload) {
        await authClient.get("/sanctum/csrf-cookie");
        await authClient.post("/register", payload);
        await authClient.post("/login", payload);
    },
};
