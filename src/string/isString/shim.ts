import isString from "./index.js";

declare global {
  interface StringConstructor {

    /**
     * Returns true if the given argument is an string
     * @param arg
     * @example
     * String.isString(2); // false
     * @example
     * String.isString("foo bar"); // true
     */
    isString(arg: unknown): arg is string;
  }
}

String.isString = isString;
