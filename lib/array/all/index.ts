import * as method from "./method";

export {};

declare global {
  interface Array<T> {
    all(fn?: (value: T, index: number, array: T[]) => boolean): boolean;
  }
}

/**
 * Returns `true` if the provided predicate function returns `true` for all elements in a collection, `false` otherwise
 * @memberof Array
 * @param {function} [fn=Boolean]
 * @returns {boolean}
 * @example
 * [4, 2, 3].all((x) => x > 1); // true
 * [1, 2, 3].all(); // true
 */
Array.prototype.all = function(fn) {
  return method(this, fn);
};
