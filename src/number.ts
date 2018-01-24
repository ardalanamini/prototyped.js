/**
 * @namespace Number
 */

export { }

declare global {
  interface NumberConstructor {
    isInstance(arg: any): arg is Number
  }
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
  Number.isInstance = (arg: any): arg is Number => !isNaN(arg)
}
