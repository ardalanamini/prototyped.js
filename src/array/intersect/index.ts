import { addPrototype } from "../../utils";
import method from "./method";

declare global {
  interface Array<T> {
    intersect(array: any[]): T[];
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
addPrototype(Array, "intersect", method);
