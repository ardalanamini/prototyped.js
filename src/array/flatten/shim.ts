import { addPrototype } from "../../utils.js";
import flatten from "./index.js";

declare global {
  interface Array<T> {
    /**
     * Flattens an array up to the specified depth
     * @param [depth=1]
     * @example
     * [1, [2], 3, 4].flatten(); // [1, 2, 3, 4]
     * @example
     * [1, [2, [3, [4, 5], 6], 7], 8].flatten(2); // [1, 2, 3, [4, 5], 6, 7, 8]
     */
    flatten(depth?: number): unknown[];
  }
}

addPrototype(Array, "flatten", flatten);
