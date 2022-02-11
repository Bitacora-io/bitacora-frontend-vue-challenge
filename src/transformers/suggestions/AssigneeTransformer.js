/* ============
 * Assingee Transformer
 * ============
 *
 * The transformer for the assingee.
 */

import BaseTransformer from "./BaseTransformer";

export default class ProjectTransformer extends BaseTransformer {
  /**
   * Method used to transform a fetched project.
   *
   * @param project The fetched project.
   *
   * @returns {Object} The transformed project.
   */
  static fetch(assingee) {
    return {
      id: null,
      name: assingee[0],
    };
  }
}
