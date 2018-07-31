import * as method from "./method";

declare global {
  interface Array<T> {
    min(path?: string): number;
  }
}

/**
 * Returns the minimum value of a given path
 * @memberof Array
 * @param {String} [path]
 * @returns {number}
 * @example
 * [1, 2, 3].min(); // 1
 * [{a: 1}, {a: 2}, {a: 3}].min('a'); // 1
 * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].min('a.b'); // 1
 */
Array.prototype.min = function(path) {
  return method(this, path);
};