import * as method from "./method";

declare global {
  interface Array<T> {
    distinct(): T[];
  }
}

/**
 * Returns all the distinct values of an array
 * @memberof Array
 * @returns {Array}
 * @example
 * [1, 2, 2, 3, 4, 4, 5].distinct(); // [1,2,3,4,5]
 */
Array.prototype.distinct = function() {
  return method(this);
};
