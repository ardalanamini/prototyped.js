import isEven from "./index.js";

declare global {
  interface Math {
    isEven(num: number): boolean;
  }
}

/**
 * Returns true if the given number is even, false otherwise
 * @memberof Math
 * @function isEven
 * @param {Number} num
 * @returns {Boolean}
 * @example
 * Math.isEven(3); // false
 */
Math.isEven = isEven;
