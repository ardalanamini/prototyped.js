import whereNotIn from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Array<T> {
    whereNotIn(value: T[]): T[];

    whereNotIn(field: string, value: unknown[]): T[];
  }
}

/**
 * Filters the array
 * @memberof Array.prototype
 * @function whereNotIn
 * @param {String|Array} field
 * @param {Array} [value]
 * @returns {Array}
 * @example
 * [1, 2, 2, 3, 4, 4, 5].whereNotIn([3,4]); // [1,2,2,5]
 * [{count:1}, {count:20}, {count:15}].whereNotIn("count", [1, 15]); // [{count:20}]
 */
addPrototype(Array, "whereNotIn", whereNotIn);
