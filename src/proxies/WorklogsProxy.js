import BaseProxy from "./BaseProxy";

class WorklogsProxy extends BaseProxy {
  /**
   * The constructor for the AuthProxy.
   *
   * @param {Object} parameters The query parameters.
   */
  constructor(parameters) {
    super("api/worklogs", parameters);
  }
}

export default WorklogsProxy;
