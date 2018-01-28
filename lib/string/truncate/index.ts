export { }

declare global {
  interface String {
    truncate(num: number): String
  }
}

/**
 * Truncates a string up to a specified length
 * @memberof String
 * @param {number} num
 * @param {string} [truncateString="..."]
 * @returns {string}
 * @example
 * 'boomerang'.truncate(7); // 'boom...'
 * 'boomerang'.truncate(7, '....'); // 'boo....'
 */
String.prototype.truncate = function(num: number, truncateString = '...'): String {
  let length = truncateString.length

  return this.length > num ? this.slice(0, num > length ? num - length : num) + truncateString : this
}
