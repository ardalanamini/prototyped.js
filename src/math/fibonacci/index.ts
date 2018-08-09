import * as method from "./method";

declare global {
  interface Math {
    fibonacci(nth: number): number[];
  }
}

/**
 * Generates an array, containing the Fibonacci sequence, up until the nth term
 * @memberof Math
 * @param {Number} num
 * @returns {Number[]}
 * @example
 * Math.fibonacci(6); // [0, 1, 1, 2, 3, 5]
 */
Math.fibonacci = method;
