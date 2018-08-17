import * as method from "./method";

declare global {
  interface DateConstructor {
    today(): string;
  }
}

/**
 * Returns today's date in `YYYY-MM-DD` format
 * @memberof Date
 * @returns {String}
 * @example
 * Date.today(); // "2018-08-10"
 */
Date.today = method;