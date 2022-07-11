import { addPrototype } from "../../utils.js";
import whereNotIn from "./index.js";

declare global {
  interface Array<T> {
    /**
     * Filters the array
     * @param value
     * @example
     * [1, 2, 2, 3, 4, 4, 5].whereNotIn([3,4]); // [1,2,2,5]
     */
    whereNotIn(value: T[]): T[];

    /**
     * Filters the array
     * @param field
     * @param value
     * @example
     * [{count:1}, {count:20}, {count:15}].whereNotIn("count", [1, 15]); // [{count:20}]
     */
    whereNotIn(field: string, value: unknown[]): T[];
  }
}

addPrototype(Array, "whereNotIn", whereNotIn);
