import * as method from "./method";
import { addPrototype } from "../../utils";

declare global {
  interface Array<T> {
    max(path?: string): number;
  }
}

/**
 * Returns the maximum value of a given path
 * @memberof Array.prototype
 * @function max
 * @param {String} [path]
 * @returns {Number}
 * @example
 * [1, 2, 3].max(); // 3
 * [{a: 1}, {a: 2}, {a: 3}].max('a'); // 3
 * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].max('a.b'); // 3
 */
addPrototype(Array, "max", method);
