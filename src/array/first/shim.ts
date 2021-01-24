import first from ".";
import { addPrototype } from "../../utils";

declare global {
  interface Array<T> {
    first(): T[] extends [infer U, ...unknown[]] ? U : T;
  }
}

/**
 * Returns the first item of the array
 * @memberof Array.prototype
 * @function first
 * @returns {*}
 * @example
 * [1, 2, 3].first(); // 1
 */
addPrototype(Array, "first", first);
