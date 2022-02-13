/* ============
 * Title Transformer
 * ============
 *
 * The transformer for the signee.
 */

import BaseTransformer from "../BaseTransformer";

export default class TitleTransformer extends BaseTransformer {
  /**
   * Method used to transform a fetched title.
   *
   * @param signee The fetched title.
   *
   * @returns {Object} The transformed title.
   */
  static fetch(title) {
    return {
      id: title,
      name: title,
    };
  }
}
