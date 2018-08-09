import * as method from "./method";

declare global {
  interface Math {
    isEven(num: number): boolean;
  }
}

/**
 * Returns true if the given number is even, false otherwise
 * @memberof Math
 * @param {Number} num
 * @returns {Boolean}
 * @example
 * Math.isEven(3); // false
 */
Math.isEven = method;
