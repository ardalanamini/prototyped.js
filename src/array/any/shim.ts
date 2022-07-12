import any from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Array<T> {
    /**
     * Returns `true` if the provided predicate function
     * returns `true` for at least one element in a collection,
     * `false` otherwise
     * @param [fn=Boolean]
     * @example
     * [0, 1, 2, 0].any((x) => x >= 2); // true
     * @example
     * [0, 0, 1, 0].any(); // true
     */
    any(fn?: (value: T, index: number, array: T[]) => boolean): boolean;
  }
}

addPrototype(Array, "any", any);
