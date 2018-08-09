import * as method from "./method";

declare global {
  interface String {
    equals(value: any): boolean;
  }
}

/**
 * Checks if the string is equal to the given value
 * @memberof String
 * @param {*} value
 * @returns {Boolean}
 * @example
 * "hello".equals("Hello"); // false
 */
String.prototype.equals = function(value) {
  return method(this as string, value);
};
