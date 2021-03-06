import { createStore, createLogger } from "vuex";

// Modules
import auth from "./modules/auth";
import organization from "./modules/organization";
import project from "./modules/project";
import tag from "./modules/tag";
import worklog from "./modules/worklog";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  /**
   * Assign the modules to the store.
   */
  modules: {
    auth,
    organization,
    project,
    tag,
    worklog,
  },

  /**
   * If strict mode should be enabled.
   */
  strict: debug,

  /**
   * Plugins used in the store.
   */
  plugins: debug ? [createLogger()] : [],
});
