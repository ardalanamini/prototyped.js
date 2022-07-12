import { addPrototype } from "../../utils.js";
import whereNotBetween from "./index.js";

declare global {
  interface Array<T> {
    /**
     * Filters the array
     * @param start
     * @param end
     * @example
     * [1, 2, 2, 3, 4, 4, 5].whereNotBetween(3,4); // [1,2,2,5]
     */
    whereNotBetween(start: T, end: T): T[];

    /**
     * Filters the array
     * @param field
     * @param start
     * @param end
     * @example
     * [{count:1}, {count:20}, {count:15}].whereNotBetween("count", 1, 15); // [{count:20}]
     */
    whereNotBetween(field: string, start: unknown, end: unknown): T[];
  }
}

addPrototype(Array, "whereNotBetween", whereNotBetween);
