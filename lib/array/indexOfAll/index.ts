export { }

declare global {
  interface Array<T> {
    indexOfAll(value: any): Array<number>
  }
}

/**
 * Returns all indices of value in the array. If value never occurs, returns []
 * @memberof Array
 * @param {*} value
 * @returns {number[]}
 * @example
 * [1, 2, 3, 1, 2, 3].indexOfAll(1); // [0,3]
 * [1, 2, 3].indexOfAll(4); // []
 */
Array.prototype.indexOfAll = function(value: any): Array<number> {
  let indices: Array<number> = []

  this.forEach((item, index) => item === value && indices.push(index))

  return indices
}
