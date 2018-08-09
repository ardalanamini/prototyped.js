import * as method from "./method";

declare global {
  interface Math {
    average(...nums: number[]): number;
    avg(...nums: number[]): number;
  }
}

/**
 * Returns the average of an of two or more numbers
 * @memberof Math
 * @param {Number[]} nums
 * @returns {Number}
 * @example
 * Math.average(...[1, 2, 3]); // 2
 * Math.average(1, 2, 3); // 2
 */
Math.average = method;

/**
 * Returns the average of an of two or more numbers
 * @memberof Math
 * @param {Number[]} nums
 * @returns {Number}
 * @example
 * Math.avg(...[1, 2, 3]); // 2
 * Math.avg(1, 2, 3); // 2
 */
Math.avg = Math.average;
