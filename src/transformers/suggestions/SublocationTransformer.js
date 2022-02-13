/* ============
 * Sublocation Transformer
 * ============
 *
 * The transformer for the signee.
 */

import BaseTransformer from "../BaseTransformer";

export default class SublocationTransformer extends BaseTransformer {
  /**
   * Method used to transform a fetched sublocation.
   *
   * @param signee The fetched sublocation.
   *
   * @returns {Object} The transformed sublocation.
   */
  static fetch(sublocation) {
    return {
      id: sublocation,
      name: sublocation,
    };
  }
}
