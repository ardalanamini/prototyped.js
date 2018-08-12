import * as method from "./method";

declare global {
  interface Array<T> {
    equals(value: any): boolean;
  }
}

/**
 * Checks if the array is equal to the given value
 * @memberof Array
 * @param {*} value
 * @returns {Boolean}
 * @example
 * [1,2,3].equals([2,1,3]); // false
 */
Array.prototype.equals = function(value) {
  return method(this, value);
};
