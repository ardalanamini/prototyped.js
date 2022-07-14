import { addPrototype } from "../../utils.js";
import whereIn from "./index.js";

declare global {
  interface Array<T> {

    /**
     * Filters the array
     * @param value
     * @example
     * [1, 2, 2, 3, 4, 4, 5].whereIn([3,4]); // [3,4,4]
     */
    whereIn(value: T[]): T[];

    /**
     * Filters the array
     * @param field
     * @param value
     * @example
     * [{count:1}, {count:20}, {count:15}].whereIn("count", [1, 15]); // [{count:1},{count:15}]
     */
    whereIn(field: string, value: unknown[]): T[];
  }
}

addPrototype(Array, "whereIn", whereIn);
