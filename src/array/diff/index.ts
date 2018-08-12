import * as method from "./method";

declare global {
  interface Array<T> {
    diff(array: any[], comp?: (a: T, b: any) => boolean): T[];
  }
}

/**
 * Returns the difference between this and another array
 * if `comp` is given, filters out all values from an array for which the comparator function does not return true
 * @memberof Array
 * @param {Array} array
 * @param {Function} [comp]
 * @returns {Array}
 * @example
 * [1, 2, 3].diff([1, 2, 4]); // [3]
 * [1, 1.2, 1.5, 3, 0].diff([1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); // [1, 1.2]
 */
Array.prototype.diff = function(array, comp) {
  return method(this, array, comp);
};
