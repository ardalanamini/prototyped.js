import * as method from "./method";

declare global {
  interface DateConstructor {
    yesterday(): string;
  }
}

/**
 * Returns yesterday's date in `YYYY-MM-DD` format
 * @memberof Date
 * @function yesterday
 * @returns {String}
 * @example
 * Date.yesterday(); // "2018-08-11"
 */
Date.yesterday = method;
