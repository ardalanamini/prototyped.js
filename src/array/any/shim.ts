import any from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Array<T> {
    any(fn?: (value: T, index: number, array: T[]) => boolean): boolean;
  }
}

/**
 * Returns `true` if the provided predicate function
 * returns `true` for at least one element in a collection,
 * `false` otherwise
 * @memberof Array.prototype
 * @function any
 * @param {Function} [fn=Boolean]
 * @returns {Boolean}
 * @example
 * [0, 1, 2, 0].any((x) => x >= 2); // true
 * [0, 0, 1, 0].any(); // true
 */
addPrototype(Array, "any", any);
