import { addPrototype } from "../../utils.js";
import indexOfAll from "./index.js";

declare global {
  interface Array<T> {
    /**
     * Returns all indices of value in the array. If value never occurs, returns []
     * @param value
     * @example
     * [1, 2, 3, 1, 2, 3].indexOfAll(1); // [0,3]
     * @example
     * [1, 2, 3].indexOfAll(4); // []
     */
    indexOfAll(value: T): number[];
  }
}

addPrototype(Array, "indexOfAll", indexOfAll);
