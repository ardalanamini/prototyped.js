import * as method from "./method";
import { addPrototype } from "../../utils";

declare global {
  interface String {
    equals(value: any): boolean;
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
addPrototype(String, "equals", method);
