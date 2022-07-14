import { addPrototype } from "../../utils.js";
import deepFlatten, { NestedArrayT } from "./index.js";

declare global {
  interface Array<T> {

    /**
     * Deep flattens an array
     * @example
     * [1, [2], [[3], 4], 5].deepFlatten(); // [1,2,3,4,5]
     */
    deepFlatten(): T[] extends NestedArrayT<infer U> ? U[] : T[];
  }
}

addPrototype(Array, "deepFlatten", deepFlatten);
