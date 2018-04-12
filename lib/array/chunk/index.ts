import * as method from "./method";

export { };

declare global {
  interface Array<T> {
    chunk(size: number): T[][];
  }
}

/**
 * Chunks the array into smaller arrays of a specified size
 * @memberof Array
 * @param {number} size
 * @returns {Array[]}
 * @example
 * [1, 2, 3, 4, 5].chunk(2); // [[1,2],[3,4],[5]]
 */
Array.prototype.chunk = function(size) {
  return method(this, size);
};
