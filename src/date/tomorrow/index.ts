import * as method from "./method";

declare global {
  interface DateConstructor {
    tomorrow(): string;
  }
}

/**
 * Returns tomorrow's date in `YYYY-MM-DD` format
 * @memberof Date
 * @function tomorrow
 * @returns {String}
 * @example
 * Date.tomorrow(); // "2018-08-11"
 */
Date.tomorrow = method;
