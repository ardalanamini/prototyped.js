import * as method from "./method";

declare global {
  interface String {
    isEmpty(): boolean;
  }
}

/**
 * Checks if the string is empty
 * @memberof String
 * @returns {Boolean}
 * @example
 * "123".isEmpty(); // false
 * "".isEmpty(); // true
 */
String.prototype.isEmpty = function() {
  return method(this as string);
};
