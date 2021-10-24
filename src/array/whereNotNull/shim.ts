import whereNotNull from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Array<T> {
    whereNotNull(field?: string): T[];
  }
}

/**
 * Filters the array
 * @memberof Array.prototype
 * @function whereNotNull
 * @param {String} [field]
 * @returns {Array}
 * @example
 * [1, 2, 2, 3, null, undefined, 5].whereNotNull(); // [1,2,2,3,5]
 * [{count:1}, {count:null}, {foo:15}].whereNotNull("count"); // [{count:1}]
 */
addPrototype(Array, "whereNotNull", whereNotNull);
