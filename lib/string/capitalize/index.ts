export { }

declare global {
  interface String {
    capitalize(allWords?: boolean): string
  }
}

/**
 * Returns the capitalized string
 * @memberof String
 * @param {boolean} [allWords=false]
 * @returns {string}
 * @example
 * 'foo bar'.capitalize(); // 'Foo bar'
 * 'hello world'.capitalize(true); // 'Hello World'
 */
String.prototype.capitalize = function(allWords = false): string {
  if (allWords) return this.replace(/\b[a-z]/g, (char) => char.toUpperCase())

  return this.replace(/^[a-z]/, (char) => char.toUpperCase())
}
