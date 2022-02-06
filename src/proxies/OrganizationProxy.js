import BaseProxy from "./BaseProxy";
import OrganizationTransformer from "@/transformers/OrganizationTransformer";

class OrganizationProxy extends BaseProxy {
  /**
   * The constructor for the OrganizationProxy.
   *
   * @param {Object} parameters The query parameters.
   */
  constructor(parameters) {
    super("api/organizations", parameters);
  }

  /**
   * Rename the organization.
   *
   * @param {integer} organizationId - ID of the organization.
   * @param {string} name - Organization name.
   *
   * @returns {Promise} The result in a promise.
   */
  rename(organizationId, data) {
    return this.submit(
      "post",
      `${this.endpoint}/${organizationId}/rename`,
      data
    );
  }

  /**
   * Invites user to an organization.
   *
   * @param {integer} organizationId - ID of the organization.
   * @param {string} email - User email to invite.
   * @param {boolean} subscriptionPlanConfirmed - is subscription plan confirmed?
   *
   * @returns {Promise} The result in a promise.
   */
  invite({ organizationId, email, subscriptionPlanConfirmed }) {
    const data = OrganizationTransformer.invite({
      email,
      subscriptionPlanConfirmed,
    });

    return this.submit(
      "post",
      `${this.endpoint}/${organizationId}/invite`,
      data
    );
  }

  /**
   * Method used to leave an organization.
   *
   * @param {int} id The given identifier.
   *
   * @returns {Promise} The result in a promise.
   */
  leave(id) {
    return this.submit("post", `${this.endpoint}/${id}/remove_user`);
  }

  /**
   * Method used to destroy an organization.
   *
   * @param {int} id The given identifier.
   *
   * @returns {Promise} The result in a promise.
   */
  destroy(id) {
    return this.submit("post", `${this.endpoint}/${id}/delete`);
  }

  /**
   * Method used to destroy an organization logo.
   *
   * @param {int} id The given organization id.
   *
   * @returns {Promise} The result in a promise.
   */
  deleteLogo(id) {
    return this.submit("delete", `${this.endpoint}/${id}/logo`);
  }

  /**
   * Method used to destroy an organization report cover.
   *
   * @param {int} id The given organization id.
   *
   * @returns {Promise} The result in a promise.
   */
  deleteReportCover(id) {
    return this.submit("delete", `${this.endpoint}/${id}/reports/cover_image`);
  }

  /**
   * Removes user from organization.
   *
   * @param {integer} organizationId - ID of the organization.
   * @param {string} email - User email to invite.
   * @param {boolean} subscriptionPlanConfirmed - is subscription plan confirmed?
   *
   * @returns {Promise} The result in a promise.
   */
  removeUser(organizationId, email) {
    const data = OrganizationTransformer.remove(email);
    return this.submit(
      "post",
      `${this.endpoint}/${organizationId}/remove_user`,
      data
    );
  }

  /**
   * Get users from an organization.
   *
   * @param {integer} organizationId - ID of the organization.
   *
   * @returns {Promise} The result in a promise.
   */
  users({ organizationId }) {
    return this.submit("get", `${this.endpoint}/${organizationId}/users`);
  }

  /**
   * Get tags from an organization.
   *
   * @param {integer} organizationId - ID of the organization.
   *
   * @returns {Promise} The result in a promise.
   */
  getTags(organizationId) {
    return this.submit("get", `/${this.endpoint}/${organizationId}/tags`);
  }
}

export default OrganizationProxy;
