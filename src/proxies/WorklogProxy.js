import BaseProxy from "./BaseProxy";

class WorklogProxy extends BaseProxy {
  /**
   * The constructor for the AuthProxy.
   *
   * @param {Object} parameters The query parameters.
   */
  constructor(parameters) {
    super("api/worklogs", parameters);
  }

  /**
   * Method used to suggestions.
   *
   * @param {String} organizationId The organization id.
   *
   * @returns {Promise} The result in a promise.
   */
  suggestions = (organizationId) =>
    this.submit(
      "get",
      `/api/worklogs/suggestions?organization_id=${organizationId}`
    );
}

export default WorklogProxy;
