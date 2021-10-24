import median from "./index.js";
import { addPrototype, PathT } from "../../utils.js";

declare global {
  interface Array<T> {
    median(path?: T extends Record<string, unknown> ? PathT<T> : never): number;
  }
}

/**
 * Returns the median value of a given path
 * @memberof Array.prototype
 * @function median
 * @param {String} [path]
 * @returns {Number}
 * @example
 * [1, 1, 2, 4].median(); // 1.5
 * [{foo: 10}, {foo: 10}, {foo: 20}, {foo: 40}].median('foo'); // 15
 */
addPrototype(Array, "median", median);
