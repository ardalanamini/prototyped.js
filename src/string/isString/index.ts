import * as method from "./method";

declare global {
  interface StringConstructor {
    isString(arg: any): arg is string;
  }
}

/**
 * Returns true if the given argument is an string
 * @memberof String
 * @param {*} arg
 * @returns {Boolean}
 * @example
 * String.isString(2); // false
 * String.isString("foo bar"); // true
 */
String.isString = method;
