export { }

declare global {
  interface StringConstructor {
    isInstance(arg: any): arg is string
  }
}

/**
 * Returns true if the given argument is an string
 * @memberof String
 * @param {*} arg
 * @returns {boolean}
 * @example
 * String.isInstance(2); // false
 * String.isInstance('foo bar'); // true
 */
String.isInstance = (arg: any): arg is string => typeof arg === 'string'
