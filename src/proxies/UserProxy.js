import BaseProxy from "./BaseProxy";

class UserProxy extends BaseProxy {
  /**
   * The constructor for the UserProxy.
   *
   * @param {Object} parameters The query parameters.
   */
  constructor(parameters) {
    super("api/users", parameters);
  }

  /**
   * Method used to register the user.
   *
   * @param {Object} data The register data.
   *
   * @returns {Promise} The result in a promise.
   */
  register(name, email, password) {
    const data = {
      name,
      email,
      password,
    };
    return this.submit("post", `${this.endpoint}/create`, data);
  }
}

export default UserProxy;
