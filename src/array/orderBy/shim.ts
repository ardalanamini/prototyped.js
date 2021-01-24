import orderBy, { OrderT } from ".";
import { addPrototype, PathT } from "../../utils";

declare global {
  interface Array<T> {
    orderBy(order?: OrderT): T[];

    orderBy(
      field: T extends Record<string, unknown> ? PathT<T> : never,
      order?: OrderT,
    ): T[];
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
addPrototype(Array, "orderBy", orderBy);
