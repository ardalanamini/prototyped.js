import all from ".";
import { addPrototype } from "../../utils";

declare global {
  interface Array<T> {
    all(fn?: (value: T, index: number, array: T[]) => boolean): boolean;
  }
}

/**
 * Returns `true` if the provided predicate function
 * returns `true` for all elements in a collection,`false` otherwise
 * @memberof Array.prototype
 * @function all
 * @param {Function} [fn=Boolean]
 * @returns {Boolean}
 * @example
 * [4, 2, 3].all((x) => x > 1); // true
 * [1, 2, 3].all(); // true
 */
addPrototype(Array, "all", all);
