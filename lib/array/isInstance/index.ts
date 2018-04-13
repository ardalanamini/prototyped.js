import * as method from "./method";

declare global {
  interface ArrayConstructor {
    isInstance(arg: any): arg is any[];
  }
}

/**
 * An alias of Array.isArray
 * @memberof Array
 * @param {*} arg
 * @returns {boolean}
 * @example
 * Array.isInstance(2); // false
 * Array.isInstance([7, 3]); // true
 */
Array.isInstance = method;
