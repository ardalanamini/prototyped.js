import * as method from "./method";

declare global {
  interface ObjectConstructor {
    isObjectLike(arg: any): arg is object;
  }
}

/**
 * Returns true if the given argument is object like
 * @memberof Object
 * @function isObjectLike
 * @param {*} arg
 * @returns {Boolean}
 * @example
 * Object.isObjectLike(2); // false
 * Object.isObjectLike({foo: 'bar'}); // true
 */
Object.isObjectLike = method;
