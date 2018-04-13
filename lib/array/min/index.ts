import * as method from "./method";

declare global {
  interface Array<T> {
    min(key?: string): number;
  }
}

/**
 * Returns the minimum value of a given key
 * @memberof Array
 * @param {String} [key]
 * @returns {number}
 * @example
 * [1, 2, 3].min(); // 1
 * [{a: 1}, {a: 2}, {a: 3}].min('a'); // 1
 * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].min('a.b'); // 1
 */
Array.prototype.min = function(key) {
  return method(this, key);
};
