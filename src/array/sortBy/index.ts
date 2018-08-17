import * as method from "./method";

declare global {
  interface Array<T> {
    sortBy(fn: string | ((value: any) => number)): T[];
  }
}

/**
 * Groups the elements of an array based on the given function and returns the count of elements in each group
 * @memberof Array
 * @param {String|Function} fn
 * @returns {Array}
 * @example
 * ['five', 'three', 'one'].sortBy('length'); // ['one', 'five', 'three']
 * ['five', 'three', 'one'].sortBy((value) => -value.length); // ['three', 'five', 'one']
 */
Array.prototype.sortBy = function(fn) {
  return method(this, fn);
};