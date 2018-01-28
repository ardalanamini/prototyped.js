export { }

declare global {
  interface Array<T> {
    union(array: Array<T>): Array<T>
  }
}

/**
 * Returns every element that exists in any of the two arrays once
 * @memberof Array
 * @param {Array} array
 * @returns {Array}
 * @example
 * [1, 2, 3].union([4, 3, 2]); // [1,2,3,4]
 */
Array.prototype.union = function(array: Array<any>): Array<any> {
  return Array.from(new Set([...this, ...array]))
}
