export { }

declare global {
  interface Array<T> {
    deepFlatten(): Array<any>
  }
}

/**
 * Deep flattens an array
 * @memberof Array
 * @returns {Array}
 * @example
 * [1, [2], [[3], 4], 5].deepFlatten(); // [1,2,3,4,5]
 */
Array.prototype.deepFlatten = function(): Array<any> {
  const _deepFlatten: (arr: Array<any>) => Array<any> = (arr) => [].concat(...arr.map(v => (Array.isArray(v) ? _deepFlatten(v) : v)))

  return _deepFlatten(this)
}
