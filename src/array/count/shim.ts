import count from ".";
import { addPrototype } from "../../utils";

declare global {
  interface Array<T> {
    count(value?: T): number;
  }
}

/**
 * Counts the occurrences of a value in an array
 * @memberof Array.prototype
 * @function count
 * @param {*} [value]
 * @returns {Number}
 * @example
 * [1, 1, 2, 1, 2, 3].count(); // 6
 * [1, 1, 2, 1, 2, 3].count(1); // 3
 */
addPrototype(Array, "count", count);
