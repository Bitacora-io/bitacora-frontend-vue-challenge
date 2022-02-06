import BaseProxy from "./BaseProxy";

class ProjectProxy extends BaseProxy {
  /**
   * The constructor for the OrganizationProxy.
   *
   * @param {Object} parameters The query parameters.
   */
  constructor(parameters) {
    super("api/projects", parameters);
  }
}

export default ProjectProxy;
