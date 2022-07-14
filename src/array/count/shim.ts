import { addPrototype } from "../../utils.js";
import count from "./index.js";

declare global {
  interface Array<T> {

    /**
     * Counts the occurrences of a value in an array
     * @param [value]
     * @example
     * [1, 1, 2, 1, 2, 3].count(); // 6
     * @example
     * [1, 1, 2, 1, 2, 3].count(1); // 3
     */
    count(value?: T): number;
  }
}

addPrototype(Array, "count", count);
