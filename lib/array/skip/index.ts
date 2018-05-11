import * as method from "./method";

declare global {
  interface Array<T> {
    skip(offset: number): T[];
    offset(offset: number): T[];
  }
}

/**
 * skips the array
 * @memberof Array
 * @param {Number} [offset]
 * @returns {Array}
 * @example
 * [2, 1, 2, 5].skip(1); // [1,2,5]
 */
Array.prototype.skip = function(offset: number) {
  return method(this, offset);
};

/**
 * An alias of Array.prototype.skip
 * @memberof Array
 * @param {Number} [offset]
 * @returns {Array}
 * @example
 * [2, 1, 2, 5].offset(1); // [1,2,5]
 */
Array.prototype.offset = Array.prototype.skip;
