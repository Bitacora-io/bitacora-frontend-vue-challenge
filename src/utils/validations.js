const mailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
 * Verifies if the input data (String) has
 * a valid email formatting.
 *
 * @param {string} email A string of an email
 *
 * @returns {boolean} Results in a boolean letting the consumer
 * 					  know whether it's an email or not
 */
export const hasEmailFormat = (email) => mailRegex.test(String(email));
