import * as method from "./method";

declare global {
  interface String {
    empty(): boolean;
  }
}

/**
 * Checks if the string is empty
 * @memberof String
 * @returns {boolean}
 * @example
 * "123".empty(); // false
 * "".empty(); // true
 */
String.prototype.empty = function() {
  return method(this as string);
};
