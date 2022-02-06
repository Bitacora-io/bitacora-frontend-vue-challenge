/**
 * Resolved promise with delay time
 *
 * @param {Integer} ms Milliseconds to wait
 *
 * @returns {Promise} The result in a promise
 */
export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
