import * as method from "./method";

declare global {
  interface Array<T> {
    contains(value: any): boolean;
  }
}

/**
 * Determines whether the collection contains a given item
 * @memberof Array
 * @param {*} value
 * @returns {Boolean}
 * @example
 * [1, 2, 3].contains(2); // true
 */
Array.prototype.contains = function(value) {
  return method(this, value);
};
