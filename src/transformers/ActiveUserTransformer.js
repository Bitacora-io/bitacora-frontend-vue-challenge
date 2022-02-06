/* ============
 * Active User Transformer
 * ============
 *
 * The transformer for the active user.
 */

import BaseTransformer from "./BaseTransformer";

export default class ActiveUserTransformer extends BaseTransformer {
  /**
   * Method used to transform a fetched user.
   *
   * @param user The fetched user.
   *
   * @returns {Object} The transformed user.
   */
  static fetch(user) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      timezone: user.time_zone,
      timezoneId: user.time_zone_id,
      stripeCustomerId: user.stripe_customer_id,
      hasTrialPeriod: user.has_trial_period,
      defaultLocale: user.default_locale,
      createdAt: user.created_at,
    };
  }
}
