import OrganizationProxy from "@/proxies/OrganizationProxy";
import OrganizationTransformer from "@/transformers/OrganizationTransformer";

const MutationTypes = {
  ALL: "ALL",
  SET_ACTIVE: "SET_ACTIVE",
  GET_ACTIVE: "GET_ACTIVE",
  LOADING: "LOADING",
};

// Initial State
const state = () => ({
  organizations: [],
  active: {
    id: null,
    name: "",
  },
  loading: false,
});

// Getters
const getters = {
  personalOrg: (state) => state.organizations.find((item) => item.isPersonal),
  isLoading: (state) => state.loading,
};

const organizationId = localStorage.getItem("organization");

// Actions
const actions = {
  all({ state, getters, commit }) {
    commit(MutationTypes.LOADING, true);
    new OrganizationProxy()
      .all()
      .then((response) => {
        commit(
          MutationTypes.ALL,
          OrganizationTransformer.fetchCollection(response)
        );

        const foundOrg = state.organizations.find(
          (org) => org.id == organizationId
        );

        if (!organizationId || !foundOrg) {
          commit(MutationTypes.SET_ACTIVE, getters.personalOrg);
        } else {
          commit(MutationTypes.SET_ACTIVE, foundOrg);
        }
      })
      .catch(() => {
        console.error("Request failed...");
      })
      .finally(() => commit(MutationTypes.LOADING, false));
  },

  find({ commit }, id) {
    return new Promise((resolve, reject) => {
      commit(MutationTypes.LOADING, true);

      new OrganizationProxy()
        .find(id)
        .then((response) =>
          resolve({
            ...OrganizationTransformer.fetch({
              ...response,
            }),
          })
        )
        .catch((error) => reject(error))
        .finally(() => commit(MutationTypes.LOADING, false));
    });
  },

  setActive({ commit }, organization) {
    commit(MutationTypes.SET_ACTIVE, organization);
  },
};

// Mutations
const mutations = {
  [MutationTypes.ALL](state, organizations) {
    state.organizations = organizations;
  },
  [MutationTypes.SET_ACTIVE](state, organization) {
    state.active = organization;
    localStorage.setItem("organization", organization.id);
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
