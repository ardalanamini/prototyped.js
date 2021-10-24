import equals from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Object {
    $equals(obj: unknown): boolean;
  }
}

/**
 * Performs a deep comparison between two values to determine if they are equivalent
 * @memberof Object.prototype
 * @function $equals
 * @param {*} obj
 * @returns {Boolean}
 * @example
 * ({ a: [2, { e: 3 }], b: [4], c: 'foo' }).$equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }); // true
 */
addPrototype(Object, "$equals", equals);
