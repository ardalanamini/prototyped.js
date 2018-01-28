export { }

declare global {
  interface Array<T> {
    intersect(array: Array<any>): Array<T>
  }
}

/**
 * Returns a list of elements that exist in both arrays
 * @memberof Array
 * @param {Array} array
 * @returns {Array}
 * @example
 * [1, 2, 3].intersect([4, 3, 2]); // [2,3]
 */
Array.prototype.intersect = function(array: Array<any>): Array<any> {
  const set = new Set(array)

  return this.filter(item => set.has(item))
}
