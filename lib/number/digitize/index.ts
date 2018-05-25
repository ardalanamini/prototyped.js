import * as method from "./method";

declare global {
  interface NumberConstructor {
    digitize(num: number): number[];
  }
}

/**
 * Converts the number to an array of digits
 * @memberof Number
 * @param {number} num
 * @returns {number[]}
 * @example
 * Number.digitize(123); // [1, 2, 3]
 */
Number.digitize = method;
