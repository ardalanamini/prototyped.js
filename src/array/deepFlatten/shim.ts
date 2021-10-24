import deepFlatten, { NestedArrayT } from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Array<T> {
    deepFlatten(): T[] extends NestedArrayT<infer U> ? U[] : T[];
  }
}

/**
 * Deep flattens an array
 * @memberof Array.prototype
 * @function deepFlatten
 * @returns {Array}
 * @example
 * [1, [2], [[3], 4], 5].deepFlatten(); // [1,2,3,4,5]
 */
addPrototype(Array, "deepFlatten", deepFlatten);
