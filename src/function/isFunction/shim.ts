import isFunction from "./index.js";

declare global {
  interface FunctionConstructor {

    /**
     * Returns true if the given argument is a function
     * @param arg
     * @example
     * Function.isFunction(2); // false
     * @example
     * Function.isFunction(() => {}); // true
     */
    isFunction(arg: unknown): arg is (...args: unknown[]) => unknown;
  }
}

Function.isFunction = isFunction;
