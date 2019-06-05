import { addPrototype } from "../../utils";
import method from "./method";

declare global {
  interface Array<T> {
    indexOfAll(value: any): number[];
  }
}

/**
 * Returns all indices of value in the array. If value never occurs, returns []
 * @memberof Array.prototype
 * @function indexOfAll
 * @param {*} value
 * @returns {Number[]}
 * @example
 * [1, 2, 3, 1, 2, 3].indexOfAll(1); // [0,3]
 * [1, 2, 3].indexOfAll(4); // []
 */
addPrototype(Array, "indexOfAll", method);
