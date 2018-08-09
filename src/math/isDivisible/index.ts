import * as method from "./method";

declare global {
  interface Math {
    isDivisible(dividend: number, divisor: number): boolean;
  }
}

/**
 * Checks if the first numeric argument is divisible by the second one
 * @memberof Math
 * @param {Number} dividend
 * @param {Number} divisor
 * @returns {Boolean}
 * @example
 * Math.isDivisible(6, 3); // true
 */
Math.isDivisible = method;
