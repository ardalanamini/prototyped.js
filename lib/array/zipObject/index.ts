export { }

declare global {
  interface Array<T> {
    zipObject(array: Array<T>): object
  }
}

/**
 * Creates an array of elements, grouped based on the position in the original arrays
 * @memberof Array
 * @param {Array} array
 * @returns {Array}
 * @example
 * ['a', 'b', 'c'].zipObject([1, 2]); // {a: 1, b: 2, c: undefined}
 * ['a', 'b'].zipObject([1, 2, 3]); // {a: 1, b: 2}
 */
Array.prototype.zipObject = function(array: Array<any>): object {
  return this.reduce((obj, prop, index) => ((obj[prop] = array[index]), obj), {})
}
