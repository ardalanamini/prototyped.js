export { }

declare global {
  interface Array<T> {
    tail(): Array<T>
  }
}

/**
 * Returns all elements in an array except for the first one
 * @memberof Array
 * @returns {Array}
 * @example
 * [1, 2, 3].tail(); // [2, 3]
 */
Array.prototype.tail = function(): Array<any> {
  return this.length > 1 ? this.slice(1) : []
}
