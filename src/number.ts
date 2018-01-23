/**
 * @namespace Number
 */

interface NumberConstructor {
  isInstance(arg: any): boolean
}

if (!Number.isInstance) {
  /**
   * Returns true if the given argument is a number
   * @param {*} arg
   * @returns {boolean}
   * @example
   * Number.isInstance('foo bar'); // false
   * Number.isInstance(2); // true
   */
  Number.isInstance = (arg) => !isNaN(arg)
}
