import * as method from "./method";

declare global {
  interface NumberConstructor {
    isNumber(arg: any): arg is number;
  }
}

/**
 * Returns true if the given argument is a number
 * @memberof Number
 * @param {*} arg
 * @returns {Boolean}
 * @example
 * Number.isNumber('foo bar'); // false
 * Number.isNumber(2); // true
 */
Number.isNumber = method;
