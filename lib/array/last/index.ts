import * as method from "./method";

declare global {
  interface Array<T> {
    last(): T;
  }
}

/**
 * Returns the last item of the array
 * @memberof Array
 * @returns {*}
 * @example
 * [1, 2, 3].last(); // 3
 */
Array.prototype.last = function() {
  return method(this);
};
