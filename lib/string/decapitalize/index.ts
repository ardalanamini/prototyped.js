export { }

declare global {
  interface String {
    decapitalize(allWords?: boolean): string
  }
}

/**
 * Returns the decapitalized string
 * @memberof String
 * @param {boolean} [allWords=false]
 * @returns {string}
 * @example
 * 'Foo Bar'.decapitalize(); // 'foo Bar'
 * 'Hello World'.decapitalize(true); // 'hello world'
 */
String.prototype.decapitalize = function(allWords = false): string {
  if (allWords) return this.replace(/\b[A-Z]/g, (char) => char.toLowerCase())

  return this.replace(/^[A-Z]/, (char) => char.toLowerCase())
}
