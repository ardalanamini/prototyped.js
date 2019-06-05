import method from "./method";

declare global {
  interface DateConstructor {
    isDate(arg: any): arg is Date;
  }
}

/**
 * Returns true if the given argument is an instance of Date
 * @memberof Date
 * @function isDate
 * @param {*} arg
 * @returns {Boolean}
 * @example
 * Date.isDate('foo bar'); // false
 * Date.isDate(new Date()); // true
 */
Date.isDate = method;
