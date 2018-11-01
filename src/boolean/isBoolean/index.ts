import * as method from "./method";

declare global {
  interface BooleanConstructor {
    isBoolean(arg: any): arg is boolean;
  }
}

/**
 * Returns true if the given argument is a boolean
 * @memberof Boolean
 * @function isBoolean
 * @param {*} arg
 * @returns {Boolean}
 * @example
 * Boolean.isBoolean('foo bar'); // false
 * Boolean.isBoolean(flase); // true
 */
Boolean.isBoolean = method;
