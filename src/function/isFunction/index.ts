import method from "./method";

declare global {
  interface FunctionConstructor {
    // eslint-disable-next-line @typescript-eslint/ban-types
    isFunction(arg: any): arg is Function;
  }
}

/**
 * Returns true if the given argument is a function
 * @memberof Function
 * @function isFunction
 * @param {*} arg
 * @returns {Boolean}
 * @example
 * Function.isFunction(2); // false
 * Function.isFunction((() => {})); // true
 */
Function.isFunction = method;
