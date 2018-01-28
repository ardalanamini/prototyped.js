export { }

declare global {
  interface Array<T> {
    everyNth(nth: number): Array<T>
  }
}

/**
 * Returns every nth element in an array
 * @memberof Array
 * @returns {Array}
 * @example
 * [1, 2, 3, 4, 5, 6].everyNth(2); // [ 2, 4, 6 ]
 */
Array.prototype.everyNth = function(nth: number): Array<any> {
  return this.filter((e, i) => i % nth === nth - 1)
}
