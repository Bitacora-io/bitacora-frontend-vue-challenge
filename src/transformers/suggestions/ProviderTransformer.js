/* ============
 * Provider Transformer
 * ============
 *
 * The transformer for the provider.
 */

import BaseTransformer from "../BaseTransformer";

export default class ProviderTransformer extends BaseTransformer {
  /**
   * Method used to transform a fetched provider.
   *
   * @param provider The fetched provider.
   *
   * @returns {Object} The transformed provider.
   */
  static fetch(provider) {
    return {
      id: provider,
      name: provider,
    };
  }
}
