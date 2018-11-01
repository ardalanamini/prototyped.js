import * as method from "./method";
import { addPrototype } from "../../utils";

declare global {
  interface Array<T> {
    orderBy(order?: "asc" | "desc"): T[];
    orderBy(field: string, order?: "asc" | "desc"): T[];
  }
}

/**
 * sorts the array
 * @memberof Array.prototype
 * @function orderBy
 * @param {String} [field]
 * @param {"asc"|"desc"} [order="asc"]
 * @returns {Array}
 * @example
 * [2, 1, 2, 5].orderBy(); // [1,2,2,5]
 * [2, 1, 2, 5].orderBy("desc"); // [5,2,2,1]
 * [{count:1}, {count:20}, {count:15}].orderBy("count", "asc"); // [{count:1},{count:15},{count:20}]
 */
addPrototype(Array, "orderBy", method);
