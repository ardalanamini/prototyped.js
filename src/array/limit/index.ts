import { addPrototype } from "../../utils";
import method from "./method";

declare global {
  interface Array<T> {
    limit(limit: number): T[];
    take(limit: number): T[];
  }
}

/**
 * limits the array
 * @memberof Array.prototype
 * @function limit
 * @param {Number} [limit]
 * @returns {Array}
 * @example
 * [2, 1, 2, 5].limit(2); // [2,1]
 */
addPrototype(Array, "limit", method);

/**
 * An alias of Array.prototype.skip
 * @memberof Array.prototype
 * @function take
 * @param {Number} [limit]
 * @returns {Array}
 * @example
 * [2, 1, 2, 5].take(2); // [2,1]
 */
Array.prototype.take = Array.prototype.limit;
