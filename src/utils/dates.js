/**
 * Formats an unformatted date (outcome of new `Date()`) into yyyyMMdd as integer
 *
 * @param {Date} date Date to format given a Date() object
 *
 * @returns {Integer} Formatted date on yyyyMMdd
 */
export const dateFormatter = (date) =>
  date
    .toISOString()
    .replace(/[^0-9]/g, "")
    .slice(0, -9);

/**
 * Formats an unformatted date (outcome of new `Date()`) into HHmm as string
 *
 * @param {Date} date Date to format given a Date() object
 *
 * @returns {String} Formatted date on HHmm
 */
export const timeFormatter = (date) => `${date.getHours()}${date.getMinutes()}`;

/**
 * Calculates From and To dates based on a given number of days before today's date.
 *
 * @param {Integer} daysBack Number of days to calculate before the actual date.
 *
 * @returns {Array} Results in an array of two elements From and To dates (unformatted).
 */
export const pastDates = (daysBack) => {
  const start = new Date();
  start.setTime(start.getTime() - 3600 * 1000 * 24 * daysBack);
  return [start, new Date()];
};

/**
 * Display Human Friendly date in format YYYY/MM/DD.
 *
 * @param {Date} date Date to format given a Date() object
 *
 * @returns {String} Formatted date on YYYY/MM/DD
 */
export const friendlyDate = (date) =>
  date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

/**
 * Display Human Friendly date in format YYYY/MM/DD, HH:mm:ss.
 *
 * @param {Date} date Date to format given a Date() object
 *
 * @returns {String} Formatted date on YYYY/MM/DD, HH:mm:ss
 */
export const friendlyDateTime = (date) =>
  date.toLocaleString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });

/**
 * Display Entry DateTime YYYY/MM/DD.
 *
 * @param {Date} date Date to format given a Date() object
 * @param {String} time Time to format given time
 *
 * @returns {String} Formatted date on YYYY/MM/DD HH:mm:ss
 */
export const formatEntryDatetime = (entryDate, createdAt, time) => {
  if (time === null) {
    time = new Date(createdAt).toLocaleTimeString([], {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
  } else {
    const hour = (time / 100).toFixed().toString().padStart(2, "0");
    const minute = (time % 100).toFixed().toString().padStart(2, "0");

    time = `${hour}:${minute}`;
  }

  return `${entryDate} ${time}`;
};

/**
 * Convert milliseconds to Hours
 *
 * @param {Integer} ms Milliseconds
 *
 * @returns {Float} Total Hours in decimal
 */
export const msToHours = (ms) => ((ms / (1000 * 60 * 60)) % 24).toFixed(2);
