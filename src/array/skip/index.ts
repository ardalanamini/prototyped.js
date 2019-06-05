import { addPrototype } from "../../utils";
import method from "./method";

declare global {
  interface Array<T> {
    skip(offset: number): T[];
    offset(offset: number): T[];
  }
}

/**
 * skips the array
 * @memberof Array.prototype
 * @function skip
 * @param {Number} [offset]
 * @returns {Array}
 * @example
 * [2, 1, 2, 5].skip(1); // [1,2,5]
 */
addPrototype(Array, "skip", method);

/**
 * An alias of Array.prototype.skip
 * @memberof Array.prototype
 * @function offset
 * @param {Number} [offset]
 * @returns {Array}
 * @example
 * [2, 1, 2, 5].offset(1); // [1,2,5]
 */
Array.prototype.offset = Array.prototype.skip;
