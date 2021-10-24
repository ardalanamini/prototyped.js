import isEmpty from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface String {
    isEmpty(): boolean;
  }
}

/**
 * Checks if the string is empty
 * @memberof String.prototype
 * @function isEmpty
 * @returns {Boolean}
 * @example
 * "123".isEmpty(); // false
 * "".isEmpty(); // true
 */
addPrototype(String, "isEmpty", isEmpty);
