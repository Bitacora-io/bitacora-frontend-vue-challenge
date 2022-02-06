/* ============
 * Tag Transformer
 * ============
 *
 * The transformer for the tag.
 */

import BaseTransformer from "./BaseTransformer";

export default class TagTransformer extends BaseTransformer {
  /**
   * Method used to transform a fetched tag.
   *
   * @param tag The fetched tag.
   *
   * @returns {Object} The transformed tag.
   */
  static fetch(tag) {
    return {
      id: tag[0],
      name: tag[1],
    };
  }

  /**
   * Method used to transform a send tag.
   *
   * @param tag The tag to be send.
   *
   * @returns {Object} The transformed tag.
   */
  static send(tag) {
    return {
      name: tag.name,
    };
  }
}
