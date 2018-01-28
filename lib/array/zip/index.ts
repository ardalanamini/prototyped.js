export { }

declare global {
  interface Array<T> {
    zip(...arrays: Array<Array<any>>): Array<Array<any>>
  }
}

/**
 * Creates an array of elements, grouped based on the position in the original arrays
 * @memberof Array
 * @param {Array[]} array
 * @returns {Array}
 * @example
 * ['a', 'b'].zip([1, 2], [true, false]); // [['a', 1, true], ['b', 2, false]]
 * ['a'].zip([1, 2], [true, false]); // [['a', 1, true], [undefined, 2, false]]
 */
Array.prototype.zip = function(...arrays: Array<Array<any>>): Array<Array<any>> {
  arrays = [this, ...arrays]

  const maxLength = Math.max(...arrays.map(x => x.length))

  return Array.from({ length: maxLength }).map((_, i) => {
    return Array.from({ length: arrays.length }, (_, k) => arrays[k][i]);
  })
}
