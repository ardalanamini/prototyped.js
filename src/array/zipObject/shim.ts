import zipObject from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {
    zipObject(array: unknown[]): Record<string, unknown>;
  }
}

/**
 * Given an array of valid property identifiers and an array of values,
 * return an object associating the properties to the values
 * @memberof Array.prototype
 * @function zipObject
 * @param {Array} array
 * @returns {Object}
 * @example
 * ['a', 'b', 'c'].zipObject([1, 2]); // {a: 1, b: 2, c: undefined}
 * ['a', 'b'].zipObject([1, 2, 3]); // {a: 1, b: 2}
 */
addPrototype(Array, "zipObject", zipObject);
