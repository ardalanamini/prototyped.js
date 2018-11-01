import * as method from "./method";

declare global {
  interface Math {
    isPrime(num: number): boolean;
  }
}

/**
 * Checks if the provided integer is a prime number
 * @memberof Math
 * @function isPrime
 * @param {Number} num
 * @returns {Boolean}
 * @example
 * Math.isPrime(11); // true
 */
Math.isPrime = method;
