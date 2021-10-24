import average from "./index.js";
import { addPrototype, PathT } from "../../utils.js";

declare global {
  interface Array<T> {
    average(
      path?: T extends Record<string, unknown> ? PathT<T> : never,
    ): number;

    avg(path?: T extends Record<string, unknown> ? PathT<T> : never): number;
  }
}

/**
 * Returns the average value of a given path
 * @memberof Array.prototype
 * @function average
 * @param {String} [path]
 * @returns {Number}
 * @example
 * [1, 2, 3].average(); // 2
 * [{a: 1}, {a: 2}, {a: 3}].average("a"); // 2
 * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].average("a.b"); // 2
 */
addPrototype(Array, "average", average);

/**
 * An alias of Array.prototype.average
 * @memberof Array.prototype
 * @function avg
 * @param {String} [path]
 * @returns {Number}
 * @example
 * [1, 2, 3].avg(); // 2
 * [{a: 1}, {a: 2}, {a: 3}].avg("a"); // 2
 * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].avg("a.b"); // 2
 */
addPrototype(Array, "avg", average);
