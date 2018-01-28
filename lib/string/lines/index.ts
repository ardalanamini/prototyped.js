export { }

declare global {
  interface String {
    lines(): Array<string>
  }
}

/**
 * Splits a multiline string into an array of lines
 * @memberof String
 * @returns {string[]}
 * @example
 * 'This\nis a\nmultiline\nstring.\n'.lines(); // ['This', 'is a', 'multiline', 'string.' , '']
 */
String.prototype.lines = function(): Array<string> {
  return this.split(/\r?\n/)
}
