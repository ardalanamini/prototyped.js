export { }

declare global {
  interface Array<T> {
    flatten(depth?: number): Array<any>
  }
}

/**
 * Flattens an array up to the specified depth
 * @memberof Array
 * @param {number} [depth=1]
 * @returns {Array}
 * @example
 * [1, [2], 3, 4].flatten(); // [1, 2, 3, 4]
 * [1, [2, [3, [4, 5], 6], 7], 8].flatten(2); // [1, 2, 3, [4, 5], 6, 7, 8]
 */
Array.prototype.flatten = function(depth = 1): Array<any> {
  const _flatten: (arr: Array<any>, depth?: number) => Array<any> = (arr, depth = 1) =>
    depth != 1
      ? arr.reduce((a, v) => a.concat(Array.isArray(v) ? _flatten(v, depth - 1) : v), [])
      : arr.reduce((a, v) => a.concat(v), [])

  return _flatten(this, depth)
}
