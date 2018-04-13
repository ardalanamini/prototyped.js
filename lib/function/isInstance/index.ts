import * as method from "./method";

declare global {
  interface FunctionConstructor {
    // tslint:disable-next-line:ban-types
    isInstance(arg: any): arg is Function;
  }
}

/**
 * Returns true if the given argument is a function
 * @memberof Function
 * @param {*} arg
 * @returns {boolean}
 * @example
 * Function.isInstance(2); // false
 * Function.isInstance((() => {})); // true
 */
Function.isInstance = method;
