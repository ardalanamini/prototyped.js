import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface Array<T> {
    union(array: T[]): T[];
  }
}

/**
 * Returns every element that exists in any of the two arrays once
 * @memberof Array
 * @param {Array} array
 * @returns {Array}
 * @example
 * [1, 2, 3].union([4, 3, 2]); // [1,2,3,4]
 */
Array.prototype.union = utils.methodToPrototype(method);
