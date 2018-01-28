export { }

declare global {
  interface Array<T> {
    sum(key?: string): number
  }
}

/**
* Returns the minimum value of a given key
* @memberof Array
* @param {String} [key]
* @returns {number}
* @example
* [1, 2, 3].sum(); // 6
* [{a: 1}, {a: 2}, {a: 3}].sum('a'); // 6
* [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].sum('a.b'); // 6
*/
Array.prototype.sum = function(key?: string): number {
  let sum = 0

  if (key) {
    let keys = key.split('.')

    this.map((item) => {
      keys.map((k) => item = item && item[k] || 0)

      sum += item
    })

    return sum
  }

  this.map((number) => sum += number)

  return sum
}
