import clone from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Array<T> {
    clone(deep?: boolean): T[];
  }
}

/**
 * Returns the cloned array
 * @memberof Array.prototype
 * @function clone
 * @param {Boolean} [deep=false]
 * @returns {Array}
 * @example
 * [1, 2, 3].clone(); // [1, 2, 3]
 */
addPrototype(Array, "clone", clone);
