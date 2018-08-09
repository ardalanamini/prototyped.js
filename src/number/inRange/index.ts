import * as method from "./method";

declare global {
  interface NumberConstructor {
    inRange(num: number, end: number, start?: number): boolean;
  }
}

/**
 * Checks if n is between start and up to end
 * @memberof Number
 * @param {Number} num
 * @param {Number} end
 * @param {Number} [start=0]
 * @returns {Boolean}
 * @example
 * Number.inRange(4, 8); // true
 */
Number.inRange = method;
