import { addPrototype } from "../../utils.js";
import distinct from "./index.js";

declare global {
  interface Array<T> {

    /**
     * Returns all the distinct values of an array
     * @param [fn]
     * @example
     * [1, 2, 2, 3, 4, 4, 5].distinct(); // [1,2,3,4,5]
     * @example
     * [{foo:{bar:[0,1]}}, {foo:{bar:[4,1]}}].distinct("foo.bar[1]"); // [{foo:{bar:[0,1]}}]
     * @example
     * [1, 2, 2.2, 3, 4.9, 4, 5].distinct(Math.floor); // [1,2,3,4.9,5]
     */
    distinct(fn?: string | ((value: T, index: number, array: T[]) => any)): T[];
  }
}

addPrototype(Array, "distinct", distinct);
