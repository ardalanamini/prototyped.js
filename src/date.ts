/**
 * @namespace Date
 */

export { }

declare global {
  interface DateConstructor {
    isInstance(arg: any): arg is Date
  }
}

if (!Date.isInstance) {
  /**
   * Returns true if the given argument is an instance of Date
   * @param {*} arg
   * @returns {boolean}
   * @example
   * Date.isInstance('foo bar'); // false
   * Date.isInstance(new Date()); // true
   */
  Date.isInstance = (arg: any): arg is Date => arg instanceof Date
}
