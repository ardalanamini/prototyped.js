export { }

declare global {
  interface String {
    reverse(): string
  }
}

/**
 * Reverses the string
 * @memberof String
 * @returns {string}
 * @example
 * 'foobar'.reverse(); // 'raboof'
 */
String.prototype.reverse = function(): string {
  return [...this].reverse().join('')
}
