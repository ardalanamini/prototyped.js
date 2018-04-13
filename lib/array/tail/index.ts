import * as method from "./method";

declare global {
  interface Array<T> {
    tail(): T[];
  }
}

/**
 * Returns all elements in an array except for the first one
 * @memberof Array
 * @returns {Array}
 * @example
 * [1, 2, 3].tail(); // [2, 3]
 */
Array.prototype.tail = function() {
  return method(this);
};
