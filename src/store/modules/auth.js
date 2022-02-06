import ActiveUserTransformer from "@/transformers/ActiveUserTransformer";
import AuthProxy from "@/proxies/AuthProxy";
import UserProxy from "@/proxies/UserProxy";

const MutationTypes = {
  CHECK: "CHECK",
  REGISTER: "REGISTER",
  LOGIN: "LOGIN",
  ACTIVE_USER: "ACTIVE_USER",
  LOADING: "LOADING",
  LOGOUT: "LOGOUT",
  RESET_PASSWORD_VALIDATOR: "RESET_PASSWORD_VALIDATOR",
};

// Initial State
const state = () => ({
  isLoading: false,
  authenticated: false,
  user: {},
});

// Getters
const getters = {
  fetchResetPasswordValidatorResult(state) {
    return state.resetPasswordValidator;
  },
};

// Actions
const actions = {
  check({ commit }) {
    commit(MutationTypes.CHECK);
  },

  checkSession({ commit }) {
    new AuthProxy()
      .active()
      .then((response) => {
        commit(
          MutationTypes.ACTIVE_USER,
          ActiveUserTransformer.fetch(response.user)
        );
      })
      .catch(() => {
        commit(MutationTypes.LOGOUT);
      });
  },

  register({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit(MutationTypes.LOADING, true);

      new UserProxy()
        .register(payload.name, payload.email, payload.password)
        .then((response) => {
          commit(MutationTypes.LOGIN, response.session_token);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          commit(MutationTypes.LOADING, false);
        });
    });
  },

  login({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit(MutationTypes.LOADING, true);

      new AuthProxy()
        .login(payload.email, payload.password)
        .then((response) => {
          commit(MutationTypes.LOGIN, response.session_token);
          commit(
            MutationTypes.ACTIVE_USER,
            ActiveUserTransformer.fetch(response.user)
          );
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          commit(MutationTypes.LOADING, false);
        });
    });
  },

  logout({ commit }) {
    return new Promise((resolve, reject) => {
      commit(MutationTypes.LOADING, true);
      new AuthProxy()
        .logout()
        .then((response) => {
          commit(MutationTypes.LOGOUT);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          commit(MutationTypes.LOADING, false);
        });
    });
  },

  forgotPasswordSendEmail({ commit }, email) {
    return new Promise((resolve, reject) => {
      commit(MutationTypes.LOADING, true);
      new AuthProxy()
        .forgotPasswordSendEmail(email)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          commit(MutationTypes.LOADING, false);
        });
    });
  },

  resetPasswordValidator({ commit }, key) {
    return new Promise((resolve, reject) => {
      commit(MutationTypes.LOADING, true);
      new AuthProxy()
        .resetPasswordValidator(key)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          commit(MutationTypes.LOADING, false);
        });
    });
  },

  resetPassword({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit(MutationTypes.LOADING, true);
      new AuthProxy()
        .resetPassword(payload)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          commit(MutationTypes.LOADING, false);
        });
    });
  },
};

// Mutations
const mutations = {
  [MutationTypes.CHECK](state) {
    state.authenticated = !!localStorage.getItem("session_token");
  },

  [MutationTypes.ACTIVE_USER](state, payload) {
    state.user = payload;
  },

  [MutationTypes.LOADING](state, value) {
    state.isLoading = value;
  },

  [MutationTypes.LOGIN](state, token) {
    state.authenticated = true;
    localStorage.setItem("session_token", token);
  },

  [MutationTypes.LOGOUT](state) {
    state.authenticated = false;
    localStorage.removeItem("session_token");
  },

  [MutationTypes.RESET_PASSWORD_VALIDATOR](state, userFound) {
    state.resetPasswordValidator = userFound;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
