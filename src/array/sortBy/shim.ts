import { addPrototype } from "../../utils.js";
import sortBy from "./index.js";

declare global {
  interface Array<T> {
    /**
     * Groups the elements of an array based on the given function and
     * returns the count of elements in each group
     * @param fn
     * @example
     * ['five', 'three', 'one'].sortBy('length'); // ['one', 'five', 'three']
     * @example
     * ['five', 'three', 'one'].sortBy((value) => -value.length); // ['three', 'five', 'one']
     */
    sortBy(fn: string | ((value: T) => number)): T[];
  }
}

addPrototype(Array, "sortBy", sortBy);
