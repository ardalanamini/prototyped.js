export { }

declare global {
  interface String {
    words(pattern?: RegExp): Array<string>
  }
}

/**
 * Converts a given string into an array of words
 * @memberof String
 * @param {RegExp} pattern
 * @returns {string[]}
 * @example
 * 'I love javaScript!!'.words(); // ["I", "love", "javaScript"]
 * 'python, javaScript & coffee'.words(); // ["python", "javaScript", "coffee"]
 */
String.prototype.words = function(pattern = /[^a-zA-Z-]+/): Array<string> {
  return this.split(pattern).filter(Boolean)
}
