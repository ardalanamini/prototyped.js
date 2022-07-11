import all from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Array<T> {
    /**
     * Returns `true` if the provided predicate function
     * returns `true` for all elements in a collection,`false` otherwise
     * @param [fn=Boolean]
     * @example
     * [4, 2, 3].all((x) => x > 1); // true
     * @example
     * [1, 2, 3].all(); // true
     */
    all(fn?: (value: T, index: number, array: T[]) => boolean): boolean;
  }
}

addPrototype(Array, "all", all);
