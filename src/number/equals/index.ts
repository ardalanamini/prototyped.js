import { addPrototype } from "../../utils";
import method from "./method";

declare global {
  interface Number {
    equals(value: any): boolean;
  }
}

/**
 * Checks if the number is equal to the given value
 * @memberof Number.prototype
 * @function equals
 * @param {*} value
 * @returns {Boolean}
 * @example
 * (22).equals("22"); // false
 */
addPrototype(Number, "equals", method);
