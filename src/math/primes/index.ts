import * as method from "./method";

declare global {
  interface Math {
    primes(num: number): number[];
  }
}

/**
 * Generates primes up to a given number, using the Sieve of Eratosthenes
 * @memberof Math
 * @function primes
 * @param {Number} num
 * @returns {Number[]}
 * @example
 * Math.primes(10); // [2, 3, 5, 7]
 */
Math.primes = method;
