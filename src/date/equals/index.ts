import * as method from "./method";
import { addPrototype } from "../../utils";

declare global {
  interface Date {
    equals(value: any): boolean;
  }
}

/**
 * Checks if the date is equal to the given value
 * @memberof Date.prototype
 * @function equals
 * @param {*} value
 * @returns {Boolean}
 * @example
 * (new Date()).equals(new Date()); // false
 */
addPrototype(Date, "equals", method);
