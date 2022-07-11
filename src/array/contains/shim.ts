import contains from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Array<T> {
    /**
     * Determines whether the collection contains a given item
     * @param value
     * @param [fromIndex]
     * @example
     * [1, 2, 3].contains(2); // true
     * @example
     * [1, 2, 3].contains(2, 2); // false
     */
    contains(value: T, fromIndex?: number): boolean;
  }
}

addPrototype(Array, "contains", contains);
