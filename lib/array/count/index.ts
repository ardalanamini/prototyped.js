export { }

declare global {
  interface Array<T> {
    count(value?: any): number
  }
}

/**
 * Counts the occurrences of a value in an array
 * @memberof Array
 * @param {*} [value]
 * @returns {number}
 * @example
 * [1, 1, 2, 1, 2, 3].count(); // 6
 * [1, 1, 2, 1, 2, 3].count(1); // 3
 */
Array.prototype.count = function(value: any): number {
  return value ? this.reduce((a, v) => (v === value ? a + 1 : a + 0), 0) : this.length
}
