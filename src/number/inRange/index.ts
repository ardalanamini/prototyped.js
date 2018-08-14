import * as method from "./method";

declare global {
  interface Number {
    inRange(end: number, start?: number): boolean;
  }
}

/**
 * Checks if n is between start and up to end
 * @memberof Number
 * @param {Number} end
 * @param {Number} [start=0]
 * @returns {Boolean}
 * @example
 * (4).inRange(8); // true
 */
Number.prototype.inRange = function(end, start) {
  return method(this as number, end, start);
};
