import { addPrototype } from "../../utils";
import method from "./method";

declare global {
  interface Array<T> {
    whereNotBetween(start: T, end: T): T[];
    whereNotBetween(field: string, start: any, end: any): T[];
  }
}

/**
 * Filters the array
 * @memberof Array.prototype
 * @function whereNotBetween
 * @param {String|*} field
 * @param {*} start
 * @param {*} [end]
 * @returns {Array}
 * @example
 * [1, 2, 2, 3, 4, 4, 5].whereNotBetween(3,4); // [1,2,2,5]
 * [{count:1}, {count:20}, {count:15}].whereNotBetween("count", 1, 15); // [{count:20}]
 */
addPrototype(Array, "whereNotBetween", method);
