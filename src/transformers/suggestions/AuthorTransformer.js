/* ============
 * Author Transformer
 * ============
 *
 * The transformer for the author.
 */

import BaseTransformer from "../BaseTransformer";

export default class AuthorTransformer extends BaseTransformer {
  /**
   * Method used to transform a fetched author.
   *
   * @param author The fetched author.
   *
   * @returns {Object} The transformed author.
   */
  static fetch(author) {
    return {
      id: author.id,
      name: author.name,
    };
  }
}
