import { addPrototype } from "../../utils.js";
import whereBetween from "./index.js";

declare global {
  interface Array<T> {
    /**
     * Filters the array
     * @param start
     * @param end
     * @example
     * [1, 2, 2, 3, 4, 4, 5].whereBetween(3,4); // [3,4,4]
     */
    whereBetween(start: T, end: T): T[];

    /**
     * Filters the array
     * @param field
     * @param start
     * @param end
     * @example
     * [{count:1}, {count:20}, {count:15}].whereBetween("count", 1, 15); // [{count:1},{count:15}]
     */
    whereBetween(field: string, start: unknown, end: unknown): T[];
  }
}

addPrototype(Array, "whereBetween", whereBetween);
