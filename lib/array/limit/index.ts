import * as method from "./method";

declare global {
  interface Array<T> {
    limit(limit: number): T[];
    take(limit: number): T[];
  }
}

/**
 * limits the array
 * @memberof Array
 * @param {Number} [limit]
 * @returns {Array}
 * @example
 * [2, 1, 2, 5].limit(2); // [2,1]
 */
Array.prototype.limit = function(limit: number) {
  return method(this, limit);
};

/**
 * An alias of Array.prototype.skip
 * @memberof Array
 * @param {Number} [limit]
 * @returns {Array}
 * @example
 * [2, 1, 2, 5].take(2); // [2,1]
 */
Array.prototype.take = Array.prototype.limit;
