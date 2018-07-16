import * as method from "./method";

declare global {
  interface Array<T> {
    pad(size: number, value?: any): any[];
  }
}

/**
 * FillS the array with the given value until the array reaches the specified size
 * @memberof Array
 * @param {number} size
 * @param {*} [value=0]
 * @returns {Array}
 * @example
 * [1, 2, 3].pad(5, 0); // [1, 2, 3, 0, 0]
 * [1, 2, 3].pad(-5, 0); // [0, 0, 1, 2, 3]
 */
Array.prototype.pad = function(size, value) {
  return method(this, size, value);
};
