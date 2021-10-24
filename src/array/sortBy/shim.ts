import { addPrototype } from "../../utils.js";
import sortBy from "./index.js";

declare global {
  interface Array<T> {
    sortBy(fn: string | ((value: T) => number)): T[];
  }
}

/**
 * Groups the elements of an array based on the given function and
 * returns the count of elements in each group
 * @memberof Array.prototype
 * @function sortBy
 * @param {String|Function} fn
 * @returns {Array}
 * @example
 * ['five', 'three', 'one'].sortBy('length'); // ['one', 'five', 'three']
 * ['five', 'three', 'one'].sortBy((value) => -value.length); // ['three', 'five', 'one']
 */
addPrototype(Array, "sortBy", sortBy);
