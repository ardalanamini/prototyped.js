export { }

declare global {
  interface BooleanConstructor {
    isInstance(arg: any): arg is boolean
  }
}

/**
 * Returns true if the given argument is a boolean
 * @memberof Boolean
 * @param {*} arg
 * @returns {boolean}
 * @example
 * Boolean.isInstance('foo bar'); // false
 * Boolean.isInstance(flase); // true
 */
Boolean.isInstance = (arg: any): arg is boolean => typeof arg === 'boolean'
