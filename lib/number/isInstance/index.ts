import * as method from "./method";

declare global {
  interface NumberConstructor {
    isInstance(arg: any): arg is number;
  }
}

/**
 * Returns true if the given argument is a number
 * @memberof Number
 * @param {*} arg
 * @returns {boolean}
 * @example
 * Number.isInstance('foo bar'); // false
 * Number.isInstance(2); // true
 */
Number.isInstance = method;
