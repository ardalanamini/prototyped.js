export { }

declare global {
  interface Array<T> {
    initial(): Array<T>
  }
}

/**
 * Returns all the elements of an array except the last one
 * @memberof Array
 * @returns {Array}
 * @example
 * [1, 2, 3].initial(); // [1, 2]
 */
Array.prototype.initial = function(): Array<any> {
  return this.slice(0, -1)
}
