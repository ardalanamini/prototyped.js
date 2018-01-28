export { }

declare global {
  interface Array<T> {
    clone(): Array<T>
  }
}

/**
 * Returns the cloned array
 * @memberof Array
 * @returns {Array}
 * @example
 * [1, 2, 3].clone(); // [1, 2, 3]
 */
Array.prototype.clone = function(): Array<any> {
  return [...this]
}
