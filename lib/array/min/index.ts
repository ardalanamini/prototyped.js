export { }

declare global {
  interface Array<T> {
    min(key?: string): number
  }
}

/**
 * Returns the minimum value of a given key
 * @memberof Array
 * @param {String} [key]
 * @returns {number}
 * @example
 * [1, 2, 3].min(); // 1
 * [{a: 1}, {a: 2}, {a: 3}].min('a'); // 1
 * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].min('a.b'); // 1
 */
Array.prototype.min = function(key?: string): number {
  let min: number = +Infinity

  if (key) {
    let keys = key.split('.')

    this.map((item) => {
      keys.map((k) => item = item && item[k] || 0)

      min = Math.min(item, min)
    })

    return min
  }

  this.map((number) => min = Math.min(number, min))

  return min
}
