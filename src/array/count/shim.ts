import count from "./index.js";
import { addPrototype } from "../../utils.js";

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
