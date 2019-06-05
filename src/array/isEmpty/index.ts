import { addPrototype } from "../../utils";
import method from "./method";

declare global {
  interface Array<T> {
    isEmpty(): boolean;
  }
}

/**
 * Checks if the array is empty
 * @memberof Array.prototype
 * @function isEmpty
 * @returns {Boolean}
 * @example
 * [1,2].isEmpty(); // false
 * [].isEmpty(); // true
 */
addPrototype(Array, "isEmpty", method);
