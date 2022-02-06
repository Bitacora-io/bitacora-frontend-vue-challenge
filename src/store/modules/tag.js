import OrganizationProxy from "@/proxies/OrganizationProxy";
import TagTransformer from "@/transformers/TagTransformer";

const MutationTypes = {
  ALL: "ALL",
  LOADING: "LOADING",
};

// Initial State
const state = () => ({
  tags: [],
  isLoading: false,
});

// Getters
const getters = {};

// Actions
const actions = {
  all({ commit, payload }) {
    commit(MutationTypes.LOADING, true);

    const organizationId = localStorage.getItem("organization");
    new OrganizationProxy(payload)
      .getTags(organizationId)
      .then((response) => {
        commit(MutationTypes.ALL, TagTransformer.fetchCollection(response));
      })
      .catch(() => {
        console.log("Request failed...");
      })
      .finally(() => commit(MutationTypes.LOADING, false));
  },
};

// Mutations
const mutations = {
  [MutationTypes.ALL](state, tags) {
    state.tags = tags;
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
