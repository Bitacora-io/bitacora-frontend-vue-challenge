/* ============
 * Assingee Transformer
 * ============
 *
 * The transformer for the assingee.
 */

import BaseTransformer from "../BaseTransformer";

export default class AssingeeTransformer extends BaseTransformer {
  /**
   * Method used to transform a fetched assingee.
   *
   * @param assingee The fetched assingee.
   *
   * @returns {Object} The transformed assingee.
   */
  static fetch(assingee) {
    return {
      id: assingee,
      name: assingee,
    };
  }
}
