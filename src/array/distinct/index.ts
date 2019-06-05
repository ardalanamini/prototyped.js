import { addPrototype } from "../../utils";
import method from "./method";

declare global {
  interface Array<T> {
    distinct(fn?: string | ((value: T, index: number, array: T[]) => any)): T[];
  }
}

/**
 * Returns all the distinct values of an array
 * @memberof Array.prototype
 * @function distinct
 * @param {String|Function} [fn]
 * @returns {Array}
 * @example
 * [1, 2, 2, 3, 4, 4, 5].distinct(); // [1,2,3,4,5]
 * [{foo:{bar:[0,1]}}, {foo:{bar:[4,1]}}].distinct("foo.bar[1]"); // [{foo:{bar:[0,1]}}]
 * [1, 2, 2.2, 3, 4.9, 4, 5].distinct(Math.floor); // [1,2,3,4.9,5]
 */
addPrototype(Array, "distinct", method);
