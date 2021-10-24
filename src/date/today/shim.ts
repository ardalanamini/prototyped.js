import today from "./index.js";

declare global {
  interface DateConstructor {
    today(): string;
  }
}

/**
 * Returns today's date in `YYYY-MM-DD` format
 * @memberof Date
 * @function today
 * @returns {String}
 * @example
 * Date.today(); // "2018-08-10"
 */
Date.today = today;
