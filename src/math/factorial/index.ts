import * as method from "./method";

declare global {
  interface Math {
    factorial(n: number): number;
  }
}

/**
 * Calculates the factorial of a number
 * @memberof Math
 * @function factorial
 * @param {Number} num
 * @returns {Number}
 * @example
 * Math.factorial(6); // 720
 */
Math.factorial = method;
