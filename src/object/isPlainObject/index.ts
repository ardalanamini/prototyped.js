import * as method from "./method";

declare global {
  interface ObjectConstructor {
    isPlainObject(arg: any): arg is object;
  }
}

/**
 * Returns true if the given argument is a plain object
 * @memberof Object
 * @param {*} arg
 * @returns {Boolean}
 * @example
 * Object.isPlainObject(2); // false
 * Object.isPlainObject({foo: 'bar'}); // true
 */
Object.isPlainObject = method;
