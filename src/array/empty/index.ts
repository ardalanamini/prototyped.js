import * as method from "./method";

declare global {
  interface Array<T> {
    empty(): boolean;
  }
}

/**
 * Checks if the array is empty
 * @memberof Array
 * @returns {boolean}
 * @example
 * [1,2].empty(); // false
 * [].empty(); // true
 */
Array.prototype.empty = function() {
  return method(this);
};
