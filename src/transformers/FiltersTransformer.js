/* ============
 * Project Transformer
 * ============
 *
 * The transformer for the project.
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
  static fetch(filter) {
    return {
      id: filter.id,
      //   dates: `${}`,
      //   createdAt: project.created_at,
    };
  }

  /**
   * Method used to transform a send project.
   *
   * @param project The project to be send.
   *
   * @returns {Object} The transformed project.
   */
  static send(project) {
    return {
      id: project.id,
      name: project.name,
    };
  }
}
