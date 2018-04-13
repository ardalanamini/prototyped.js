import * as method from "./method";

declare global {
  interface Array<T> {
    median(key?: string): number;
  }
}

/**
 * Returns the median value of a given key
 * @memberof Array
 * @returns {Array}
 * @example
 * [1, 1, 2, 4].median(); // 1.5
 * [{foo: 10}, {foo: 10}, {foo: 20}, {foo: 40}].median('foo'); // 15
 */
Array.prototype.median = function(key) {
  return method(this, key);
};
