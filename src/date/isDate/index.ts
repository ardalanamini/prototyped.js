import * as method from "./method";

declare global {
  interface DateConstructor {
    isDate(arg: any): arg is Date;
  }
}

/**
 * Returns true if the given argument is an instance of Date
 * @memberof Date
 * @param {*} arg
 * @returns {boolean}
 * @example
 * Date.isDate('foo bar'); // false
 * Date.isDate(new Date()); // true
 */
Date.isDate = method;