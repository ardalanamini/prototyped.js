export { }

declare global {
  interface Array<T> {
    median(key?: string): number
  }
}

/**
 * Returns the median value of a given key
 * @memberof Array
 * @returns {Array}
 * @example
 * [1, 1, 2, 4].median(); // 1.5
 * [{foo: 10}, {foo: 10}, {foo: 20}, {foo: 40}].median('foo'); // 15
 */
Array.prototype.median = function(key?: string): number {
  let array = this

  array.sort((a, b) => a - b)

  let half = Math.floor(array.length / 2)

  if (key) {
    let keys = key.split('.')

    if (array.length % 2) {
      let value = array[half]

      keys.map((k) => value = value && value[k] || value)

      return value
    }

    let value1 = array[half - 1]
    let value2 = array[half]

    keys.map((k) => value1 = value1 && value1[k] || value1)
    keys.map((k) => value2 = value2 && value2[k] || value2)

    return (value1 + value2) / 2
  }

  if (array.length % 2) return array[half]

  return (array[half - 1] + array[half]) / 2
}
