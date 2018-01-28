export { }

declare global {
  interface String {
    chars(): Array<string>
  }
}

/**
 * Returns an array of the string's character
 * @memberof String
 * @returns {string[]}
 * @example
 * 'Hello'.chars(); // ['H', 'e', 'l', 'l', 'o']
 */
String.prototype.chars = function(): Array<string> {
  return this.split('')
}
