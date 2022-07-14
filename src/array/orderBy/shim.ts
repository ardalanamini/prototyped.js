import { PathT, addPrototype } from "../../utils.js";
import orderBy, { OrderT } from "./index.js";

declare global {
  interface Array<T> {

    /**
     * Sorts the array
     * @param [order="asc"]
     * @example
     * [2, 1, 2, 5].orderBy(); // [1,2,2,5]
     * @example
     * [2, 1, 2, 5].orderBy("desc"); // [5,2,2,1]
     */
    orderBy(order?: OrderT): T[];

    /**
     * Sorts the array
     * @param field
     * @param [order="asc"]
     * @example
     * [{count:1}, {count:20}, {count:15}].orderBy("count", "asc"); // [{count:1},{count:15},{count:20}]
     */
    orderBy(
      field: T extends Record<string, unknown> ? PathT<T> : never,
      order?: OrderT,
    ): T[];
  }
}

addPrototype(Array, "orderBy", orderBy);
