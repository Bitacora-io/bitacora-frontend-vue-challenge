import WorklogProxy from "@/proxies/WorklogProxy";
import WorklogTransformer from "@/transformers/WorklogTransformer";

const MutationTypes = {
  ALL: "ALL",
  LOADING: "LOADING",
};

// Initial State
const state = () => ({
  worklogs: [],
  worklogsCount: 0,
  loading: false,
});

// Getters
const getters = {};

const organizationId = localStorage.getItem("organization");

// Actions
const actions = {
  all({ commit }, payload = {}) {
    commit(MutationTypes.LOADING, true);
    new WorklogProxy({ organization_id: organizationId, ...payload })
      .all()
      .then(({ worklogs, worklogs_count }) => {
        commit(MutationTypes.ALL, {
          worklogs: WorklogTransformer.fetchCollection(worklogs),
          worklogs_count,
        });
      })
      .catch(() => {
        console.error("Request failed...");
      })
      .finally(() => commit(MutationTypes.LOADING, false));
  },
};

// Mutations
const mutations = {
  [MutationTypes.ALL](state, { worklogs, worklogs_count }) {
    state.worklogs = worklogs;
    state.worklogsCount = worklogs_count;
  },
  [MutationTypes.LOADING](state, value) {
    state.loading = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
