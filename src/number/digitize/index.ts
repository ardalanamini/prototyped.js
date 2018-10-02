import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface Number {
    digitize(): number[];
  }
}

/**
 * Converts the number to an array of digits
 * @memberof Number
 * @returns {Number[]}
 * @example
 * (123).digitize(); // [1, 2, 3]
 */
Number.prototype.digitize = utils.methodToPrototype(method);
