/**
 * @namespace Boolean
 */

interface BooleanConstructor {
  isInstance(arg: any): boolean
}

if (!Boolean.isInstance) {
  /**
   * Returns true if the given argument is a boolean
   * @param {*} arg
   * @returns {boolean}
   * @example
   * Boolean.isInstance('foo bar'); // false
   * Boolean.isInstance(flase); // true
   */
  Boolean.isInstance = (arg) => typeof arg === 'boolean'
}
