import Axios from "axios";
import store from "@/store";

Axios.defaults.baseURL = process.env.VUE_APP_API_URL;
Axios.defaults.headers.common.Accept = "application/json";

Axios.interceptors.request.use(
  (config) => {
    if (store.state.auth.authenticated) {
      const token = localStorage.getItem("session_token");
      config.headers.Authorization = `Token token=${token}`;
    }

    return config;
  },
  (error) => error
);

Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // If there's an error try to return
    // the whole error object, if
    // there's none, build it.

    // Handle Network Erros properly
    if (error.message.trim().includes("Network Error")) {
      error = {
        response: {
          data: {
            status: 503,
            error: "Network Error",
            message: "Network Error",
          },
        },
      };
    }

    if (error.response.status === 498) {
      store.dispatch("auth/logout");
    }

    return Promise.reject(error);
  }
);

export default {
  install: (app) => {
    app.provide("axios", Axios);
    app.config.globalProperties.$http = Axios;
  },
};
