import pluck from ".";
import { addPrototype, PathT } from "../../utils";

declare global {
  interface Array<T> {
    pluck(
      path: T extends Record<string, unknown> ? PathT<T> : never,
    ): unknown[];
  }
}

/**
 * Returns all of the values for the given path
 * @memberof Array.prototype
 * @function pluck
 * @param {String} path
 * @returns {Array}
 * @example
 * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].pluck('a'); // [{b: 1}, {b: 2}, {b: 3}]
 * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].pluck('a.b'); // [1, 2, 3]
 */
addPrototype(Array, "pluck", pluck);
