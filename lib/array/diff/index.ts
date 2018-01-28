export { }

declare global {
  interface Array<T> {
    diff(array: Array<any>, comp?: (a: T, b: any) => boolean): Array<T>
  }
}

/**
 * Returns the difference between this and another array
 * if `comp` is given, filters out all values from an array for which the comparator function does not return true
 * @memberof Array
 * @param {Array} array
 * @param {function} [comp]
 * @returns {Array}
 * @example
 * [1, 2, 3].diff([1, 2, 4]); // [3]
 * [1, 1.2, 1.5, 3, 0].diff([1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); // [1, 1.2]
 */
Array.prototype.diff = function(array: Array<any>, comp?: (a: any, b: any) => boolean): Array<any> {
  if (comp) return this.filter((a) => array.findIndex((b) => comp(a, b)) === -1)

  const set = new Set(array)

  return this.filter((item: any) => !set.has(item))
}
