import append from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Array<T> {
    append(value: T): number;
  }
}

/**
 * Same as push but uses concat
 * @memberof Array.prototype
 * @function append
 * @param {*} value
 * @returns {Number}
 * @example
 * var myArray = [1, 2, 3]
 * myArray.append(0); // myArray => [1, 2, 3, 0]
 */
addPrototype(Array, "append", append);
