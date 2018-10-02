import * as method from "./method";
import * as utils from "../../utils";

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
Array.prototype.limit = utils.methodToPrototype(method);

/**
 * An alias of Array.prototype.skip
 * @memberof Array
 * @param {Number} [limit]
 * @returns {Array}
 * @example
 * [2, 1, 2, 5].take(2); // [2,1]
 */
Array.prototype.take = Array.prototype.limit;
