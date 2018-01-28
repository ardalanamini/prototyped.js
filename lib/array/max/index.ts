export { }

declare global {
  interface Array<T> {
    max(key?: string): number
  }
}

/**
 * Returns the maximum value of a given key
 * @memberof Array
 * @param {String} [key]
 * @returns {number}
 * @example
 * [1, 2, 3].max(); // 3
 * [{a: 1}, {a: 2}, {a: 3}].max('a'); // 3
 * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].max('a.b'); // 3
 */
Array.prototype.max = function(key?: string): number {
  let max: number = -Infinity

  if (key) {
    let keys = key.split('.')

    this.map((item) => {
      keys.map((k) => item = item && item[k] || 0)

      max = Math.max(item, max)
    })

    return max
  }

  this.map((number) => max = Math.max(number, max))

  return max
}
