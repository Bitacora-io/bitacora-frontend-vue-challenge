import BaseProxy from "./BaseProxy";

class AuthProxy extends BaseProxy {
  /**
   * The constructor for the AuthProxy.
   *
   * @param {Object} parameters The query parameters.
   */
  constructor(parameters) {
    super("api/sessions", parameters);
  }

  /**
   * Method used to login.
   *
   * @param {String} username The username.
   * @param {String} password The password.
   *
   * @returns {Promise} The result in a promise.
   */
  login = (email, password) =>
    this.submit("post", `${this.endpoint}/login`, { email, password });

  logout = () => this.submit("get", `${this.endpoint}/logout`);

  /**
   * Method used to register the user.
   *
   * @param {String} name User name.
   * @param {String} email User email.
   * @param {String} password User password.
   *
   * @returns {Promise} The result in a promise.
   */
  register = (name, email, password) =>
    this.submit("post", "users/create", { name, email, password });

  /**
   * Method used to send reset password email.
   *
   * @param {String} email User email.
   *
   * @returns {Promise} The result in a promise.
   */
  forgotPasswordSendEmail = (email) =>
    this.submit("get", `/api/users/reset_password?email=${email}`);

  /**
   * Method used to reset the password.
   *
   * @param {String} email User email.
   *
   * @returns {Promise} The result in a promise.
   */
  resetPassword = ({ key, password }) =>
    this.submit("post", "/api/users/reset_password", { key, password });

  /**
   * Verify the token key and get the user data.
   *
   * @param {String} key Token key used to validate.
   *
   * @returns {Promise} The result in a promise.
   */
  resetPasswordValidator = (key) =>
    this.submit("get", `/api/users/reset_password_validator?key=${key}`);

  /**
   * Method used to get the active session.
   *
   * @returns {Promise} The result in a promise.
   */
  active() {
    return this.submit("get", `${this.endpoint}/active`);
  }
}

export default AuthProxy;
