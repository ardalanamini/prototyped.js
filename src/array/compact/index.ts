import * as method from "./method";
import { addPrototype } from "../../utils";

declare global {
  interface Array<T> {
    compact(): T[];
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
addPrototype(Array, "compact", method);
