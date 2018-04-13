import * as method from "./method";

declare global {
  interface Array<T> {
    pluck(key: string): any[];
  }
}

/**
 * Returns all of the values for the given key
 * @memberof Array
 * @param {string} key
 * @returns {Array}
 * @example
 * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].pluck('a'); // [{b: 1}, {b: 2}, {b: 3}]
 * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].pluck('a.b'); // [1, 2, 3]
 */
Array.prototype.pluck = function(key) {
  return method(this, key);
};
