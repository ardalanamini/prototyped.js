import * as method from "./method";

declare global {
  interface Math {
    isEven(num: number): boolean;
  }
}

/**
 * Returns true if the given number is even, false otherwise
 * @memberof Math
 * @param {number} num
 * @returns {boolean}
 * @example
 * Math.isEven(3); // false
 */
Math.isEven = method;
