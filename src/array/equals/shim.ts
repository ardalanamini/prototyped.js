import equals from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Array<T> {
    equals(value: unknown): value is T[];
  }
}

/**
 * Checks if the array is equal to the given value
 * @memberof Array.prototype
 * @function equals
 * @param {*} value
 * @returns {Boolean}
 * @example
 * [1,2,3].equals([2,1,3]); // false
 */
addPrototype(Array, "equals", equals);
