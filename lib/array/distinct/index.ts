export { }

declare global {
  interface Array<T> {
    distinct(): Array<T>
  }
}

/**
 * Returns all the distinct values of an array
 * @memberof Array
 * @returns {Array}
 * @example
 * [1, 2, 2, 3, 4, 4, 5].distinct(); // [1,2,3,4,5]
 */
Array.prototype.distinct = function(): Array<any> {
  return [...new Set(this)]
}
