import isFunction from ".";

declare global {
  interface FunctionConstructor {
    isFunction(arg: unknown): arg is (...args: unknown[]) => unknown;
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
Function.isFunction = isFunction;
