import * as method from "./method";

declare global {
  interface StringConstructor {
    repeat(n: number, value?: string): string;
  }
}

/**
 * Initializes and fills an string with the specified value
 * @memberof String
 * @function repeat
 * @param {Number} n
 * @param {String} [value=" "]
 * @returns {String}
 * @example
 * String.repeat(5, "2"); // "22222"
 */
String.repeat = method;
