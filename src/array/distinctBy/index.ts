import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface Array<T> {
    distinctBy(fn: (a: T, b: T) => boolean): T[];
  }
}

/**
 * Returns all the distinct values of an array
 * @memberof Array
 * @param {Function} fn
 * @returns {Array}
 * @example
 * [1, 2, 2, 3, 4, 4, 5].distinctBy((a, b) => a === b); // [1,2,3,4,5]
 */
Array.prototype.distinctBy = utils.methodToPrototype(method);
