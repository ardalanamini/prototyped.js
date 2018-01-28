export { }

declare global {
  interface String {
    contains(str: string): boolean
  }
}

/**
 * Find out if the string contains the argument at any position
 * @memberof String
 * @param {RegExp} pattern
 * @returns {string[]}
 * @example
 * 'javaScript & typescript'.contains('Typescript'); // true
 * 'javaScript & typescript'.contains('Typescript', true); // false
 */
String.prototype.contains = function(str: string, sensitive = false): boolean {
  if (sensitive) return this.indexOf(str) !== -1

  return this.toLowerCase().indexOf(str.toLowerCase()) !== -1
}
