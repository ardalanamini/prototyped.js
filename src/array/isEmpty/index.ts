import * as method from "./method";

declare global {
  interface Array<T> {
    isEmpty(): boolean;
  }
}

/**
 * Checks if the array is empty
 * @memberof Array
 * @returns {Boolean}
 * @example
 * [1,2].isEmpty(); // false
 * [].isEmpty(); // true
 */
Array.prototype.isEmpty = function() {
  return method(this);
};
