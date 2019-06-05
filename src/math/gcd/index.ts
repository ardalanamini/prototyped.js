import method from "./method";

declare global {
  interface Math {
    gcd(...nums: number[]): number;
  }
}

/**
 * Calculates the greatest common divisor between two or more numbers
 * @memberof Math
 * @function gcd
 * @param {Number[]} nums
 * @returns {Number}
 * @example
 * Math.gcd(8, 36); // 4
 * Math.gcd(...[12, 8, 32]); // 4
 */
Math.gcd = method;
