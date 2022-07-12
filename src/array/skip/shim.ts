import { addPrototype } from "../../utils.js";
import skip from "./index.js";

declare global {
  interface Array<T> {
    /**
     * skips the array
     * @alias offset
     * @param [offset]
     * @example
     * [2, 1, 2, 5].skip(1); // [1,2,5]
     */
    skip(offset: number): T[];

    /**
     * skips the array
     * @alias skip
     * @param [offset]
     * @example
     * [2, 1, 2, 5].offset(1); // [1,2,5]
     */
    offset(offset: number): T[];
  }
}

addPrototype(Array, ["skip", "offset"], skip);
