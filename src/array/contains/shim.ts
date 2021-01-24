import contains from ".";
import { addPrototype } from "../../utils";

declare global {
  interface Array<T> {
    contains(value: T, fromIndex?: number): boolean;
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
addPrototype(Array, "contains", contains);
