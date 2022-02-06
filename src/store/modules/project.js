import ProjectProxy from "@/proxies/ProjectProxy";
import ProjectTransformer from "@/transformers/ProjectTransformer";

const MutationTypes = {
  ALL: "ALL",
  LOADING: "LOADING",
};

// Initial State
const state = () => ({
  projects: [],
  isLoading: false,
});

// Getters
const getters = {
  projects: (store) => store.projects,
};

// Actions
const actions = {
  all({ commit, payload }) {
    commit(MutationTypes.LOADING, true);

    const organizationId = localStorage.getItem("organization");
    payload = { ...payload, organization_id: organizationId };
    new ProjectProxy(payload)
      .all()
      .then((response) => {
        commit(MutationTypes.ALL, ProjectTransformer.fetchCollection(response));
      })
      .catch(() => {
        console.log("Request failed...");
      })
      .finally(() => commit(MutationTypes.LOADING, false));
  },

  update({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit(MutationTypes.LOADING, true);

      new ProjectProxy()
        .update(payload.id, ProjectTransformer.send(payload))
        .then((response) => resolve(response))
        .catch((error) => reject(error))
        .finally(() => commit(MutationTypes.LOADING, false));
    });
  },
};

// Mutations
const mutations = {
  [MutationTypes.ALL](state, projects) {
    state.projects = projects;
  },

  [MutationTypes.LOADING](state, value) {
    state.isLoading = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
