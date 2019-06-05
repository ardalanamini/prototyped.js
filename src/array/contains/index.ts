import { addPrototype } from "../../utils";
import method from "./method";

declare global {
  interface Array<T> {
    contains(value: any): boolean;
  }
}

/**
 * Determines whether the collection contains a given item
 * @memberof Array.prototype
 * @function contains
 * @param {*} value
 * @returns {Boolean}
 * @example
 * [1, 2, 3].contains(2); // true
 */
addPrototype(Array, "contains", method);
