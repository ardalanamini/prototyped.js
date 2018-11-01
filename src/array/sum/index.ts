import * as method from "./method";
import { addPrototype } from "../../utils";

declare global {
  interface Array<T> {
    sum(path?: string): number;
  }
}

/**
 * Returns the minimum value of a given path
 * @memberof Array.prototype
 * @function sum
 * @param {String} [path]
 * @returns {Number}
 * @example
 * [1, 2, 3].sum(); // 6
 * [{a: 1}, {a: 2}, {a: 3}].sum('a'); // 6
 * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].sum('a.b'); // 6
 */
addPrototype(Array, "sum", method);
