import equals from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface String {
    equals(value: unknown): boolean;
  }
}

/**
 * Checks if the string is equal to the given value
 * @memberof String.prototype
 * @function equals
 * @param {*} value
 * @returns {Boolean}
 * @example
 * "hello".equals("Hello"); // false
 */
addPrototype(String, "equals", equals);
