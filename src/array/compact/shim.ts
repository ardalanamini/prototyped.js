import compact, { CompactT } from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Array<T> {
    compact(): CompactT<T>[];
  }
}

/**
 * Removes falsey values from the array
 * @memberof Array.prototype
 * @function compact
 * @returns {Array}
 * @example
 * [0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34].compact(); // [ 1, 2, 3, 'a', 's', 34 ]
 */
addPrototype(Array, "compact", compact);
