import isDivisible from "./index.js";

declare global {
  interface Math {
    isDivisible(dividend: number, divisor: number): boolean;
  }
}

/**
 * Checks if the first numeric argument is divisible by the second one
 * @memberof Math
 * @function isDivisible
 * @param {Number} dividend
 * @param {Number} divisor
 * @returns {Boolean}
 * @example
 * Math.isDivisible(6, 3); // true
 */
Math.isDivisible = isDivisible;
