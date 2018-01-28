export { }

declare global {
  interface ObjectConstructor {
    isInstance(arg: any): arg is object
  }
}

/**
 * Returns true if the given argument is an object
 * @memberof Object
 * @param {*} arg
 * @returns {boolean}
 * @example
 * Object.isInstance(2); // false
 * Object.isInstance({foo: 'bar'}); // true
 */
Object.isInstance = (arg: any): arg is object => arg instanceof Object
