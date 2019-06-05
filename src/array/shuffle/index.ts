import { addPrototype } from "../../utils";
import method from "./method";

declare global {
  interface Array<T> {
    shuffle(): T[];
  }
}

/**
 * Randomizes the order of the values of an array, returning a new array
 * @memberof Array.prototype
 * @function shuffle
 * @returns {Array}
 * @example
 * const foo = [1, 2, 3];
 * foo.shuffle(); // [2,3,1], foo = [1,2,3]
 */
addPrototype(Array, "shuffle", method);
