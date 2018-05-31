import * as method from "./method";

declare global {
  interface ObjectConstructor {
    isObject(arg: any): arg is object;
  }
}

/**
 * Returns true if the given argument is an object
 * @memberof Object
 * @param {*} arg
 * @returns {boolean}
 * @example
 * Object.isObject(2); // false
 * Object.isObject({foo: 'bar'}); // true
 */
Object.isObject = method;
