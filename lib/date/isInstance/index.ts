import * as method from "./method";

declare global {
  interface DateConstructor {
    isInstance(arg: any): arg is Date;
  }
}

/**
 * Returns true if the given argument is an instance of Date
 * @memberof Date
 * @param {*} arg
 * @returns {boolean}
 * @example
 * Date.isInstance('foo bar'); // false
 * Date.isInstance(new Date()); // true
 */
Date.isInstance = method;
