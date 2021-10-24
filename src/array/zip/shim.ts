import zip from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {
    zip(...arrays: unknown[][]): unknown[][];
  }
}

/**
 * Creates an array of elements, grouped based on the position in the original arrays
 * @memberof Array.prototype
 * @function zip
 * @param {Array[]} arrays
 * @returns {Array}
 * @example
 * ['a', 'b'].zip([1, 2], [true, false]); // [['a', 1, true], ['b', 2, false]]
 * ['a'].zip([1, 2], [true, false]); // [['a', 1, true], [undefined, 2, false]]
 */
addPrototype(Array, "zip", zip);
