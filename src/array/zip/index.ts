import * as method from "./method";

declare global {
  interface Array<T> {
    zip(...arrays: any[][]): any[][];
  }
}

/**
 * Creates an array of elements, grouped based on the position in the original arrays
 * @memberof Array
 * @param {Array[]} array
 * @returns {Array}
 * @example
 * ['a', 'b'].zip([1, 2], [true, false]); // [['a', 1, true], ['b', 2, false]]
 * ['a'].zip([1, 2], [true, false]); // [['a', 1, true], [undefined, 2, false]]
 */
Array.prototype.zip = function(...arrays) {
  return method(this, ...arrays);
};
