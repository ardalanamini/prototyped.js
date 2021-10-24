import intersect from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Array<T> {
    intersect(array: unknown[]): T[];
  }
}

/**
 * Returns a list of elements that exist in both arrays
 * @memberof Array.prototype
 * @function intersect
 * @param {Array} array
 * @returns {Array}
 * @example
 * [1, 2, 3].intersect([4, 3, 2]); // [2,3]
 */
addPrototype(Array, "intersect", intersect);
