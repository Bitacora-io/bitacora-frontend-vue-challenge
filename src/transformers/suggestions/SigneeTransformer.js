/* ============
 * Signee Transformer
 * ============
 *
 * The transformer for the signee.
 */

import BaseTransformer from "../BaseTransformer";

export default class SigneeTransformer extends BaseTransformer {
  /**
   * Method used to transform a fetched signee.
   *
   * @param signee The fetched signee.
   *
   * @returns {Object} The transformed signee.
   */
  static fetch(signee) {
    return {
      id: signee.email,
      name: signee.person_name,
    };
  }
}
