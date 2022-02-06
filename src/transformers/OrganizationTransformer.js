/* ============
 * Organization Transformer
 * ============
 *
 * The transformer for the organization.
 */

import BaseTransformer from "./BaseTransformer";

export default class OrganizationTransformer extends BaseTransformer {
  /**
   * Method used to transform a fetched organization.
   *
   * @param organization The fetched organization.
   *
   * @returns {Object} The transformed organization.
   */
  static fetch(organization) {
    return {
      id: organization.id,
      name: organization.name,
      isPersonal: organization.is_personal_org,
      collaborators: organization.total_users,
      activePlan: organization.active_plan,
      ownerId: organization.owner_id,
      logoUrl: organization.logo,
      reportCoverUrl: organization.report_cover_image,
    };
  }

  /**
   * Method used to transform a send organization.
   *
   * @param organization The organization to be send.
   *
   * @returns {Object} The transformed organization.
   */
  static send(organization) {
    return {
      id: organization.id,
      name: organization.name,
      is_personal: organization.isPersonal,
    };
  }

  /**
   * Method used to transform a organization rename.
   *
   * @param {object} data - The data object that holds neccesary values.
   * @param {string} data.name - Organization's name
   *
   * @returns {Object} The transformed organization.
   */
  static rename(data) {
    return {
      name: data.name,
    };
  }

  /**
   * Method used to transform a user invitation.
   *
   * @param {object} data - The data object that holds neccesary values.
   * @param {string} data.email - User's email to invite
   * @param {boolean} data.subscriptionPlanConfirmed - User's aknowledgement to invite new user.
   *
   * @returns {Object} The transformed organization.
   */
  static invite(data) {
    return {
      email: data.email,
      subscription_plan_confirmed: data.subscriptionPlanConfirmed,
    };
  }

  /**
   * Method used to transform a user removal.
   *
   * @param {string} email - User's email to invite
   *
   * @returns {Object} The transformed organization.
   */
  static remove(email) {
    return { email };
  }
}
