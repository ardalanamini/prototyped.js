import * as method from "./method";

declare global {
  interface StringConstructor {
    repeat(n: number, value?: string): string;
  }
}

/**
 * Initializes and fills an string with the specified value
 * @memberof String
 * @param {number} n
 * @param {string} [value=" "]
 * @returns {String}
 * @example
 * String.repeat(5, "2"); // "22222"
 */
String.repeat = method;