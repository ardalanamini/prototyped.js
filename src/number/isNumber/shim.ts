import isNumber from "./index.js";

declare global {
  interface NumberConstructor {
    /**
     * Returns true if the given argument is a number
     * @param arg
     * @example
     * Number.isNumber('foo bar'); // false
     * @example
     * Number.isNumber(2); // true
     */
    isNumber(arg: unknown): arg is number;
  }
}

Number.isNumber = isNumber;
