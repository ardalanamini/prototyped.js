import * as method from "./method";

declare global {
  interface Math {
    degreesToRads(num: number): number;
  }
}

/**
 * Converts a decimal degree to radians
 * @memberof Math
 * @function degreesToRads
 * @param {Number} num
 * @returns {Number}
 * @example
 * Math.degreesToRads(180); // 3.141592653589793
 */
Math.degreesToRads = method;
