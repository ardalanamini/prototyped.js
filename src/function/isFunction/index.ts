import * as method from "./method";

declare global {
  interface FunctionConstructor {
    // tslint:disable-next-line:ban-types
    isFunction(arg: any): arg is Function;
  }
}

/**
 * Returns true if the given argument is a function
 * @memberof Function
 * @param {*} arg
 * @returns {Boolean}
 * @example
 * Function.isFunction(2); // false
 * Function.isFunction((() => {})); // true
 */
Function.isFunction = method;
