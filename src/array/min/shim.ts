import min from "./index.js";
import { addPrototype, PathT } from "../../utils.js";

declare global {
  interface Array<T> {
    min(path?: T extends Record<string, unknown> ? PathT<T> : never): number;
  }
}

/**
 * Returns the minimum value of a given path
 * @memberof Array.prototype
 * @function min
 * @param {String} [path]
 * @returns {Number}
 * @example
 * [1, 2, 3].min(); // 1
 * [{a: 1}, {a: 2}, {a: 3}].min('a'); // 1
 * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].min('a.b'); // 1
 */
addPrototype(Array, "min", min);
