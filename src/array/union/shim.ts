import union from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Array<T> {
    union<P>(array: P[]): (T | P)[];
  }
}

/**
 * Returns every element that exists in any of the two arrays once
 * @memberof Array.prototype
 * @function union
 * @param {Array} array
 * @returns {Array}
 * @example
 * [1, 2, 3].union([4, 3, 2]); // [1,2,3,4]
 */
addPrototype(Array, "union", union);
