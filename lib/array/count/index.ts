import * as method from "./method";

declare global {
  interface Array<T> {
    count(value?: T): number;
  }
}

/**
 * Counts the occurrences of a value in an array
 * @memberof Array
 * @param {*} [value]
 * @returns {number}
 * @example
 * [1, 1, 2, 1, 2, 3].count(); // 6
 * [1, 1, 2, 1, 2, 3].count(1); // 3
 */
Array.prototype.count = function(value) {
  return method(this, value);
};
