import * as method from "./method";

declare global {
  interface Array<T> {
    crossJoin(array: any[]): Array<[T, any]>;
  }
}

/**
 * Cross joins the array's values among the given arrays, returning a Cartesian product with all possible permutations
 * @memberof Array
 * @param {Array} array
 * @returns {Array[]}
 * @example
 * [1, 2].crossJoin(['a', 'b']); // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
 */
Array.prototype.crossJoin = function(array) {
  return method(this, array);
};
