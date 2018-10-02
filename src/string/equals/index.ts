import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface String {
    equals(value: any): boolean;
  }
}

/**
 * Checks if the string is equal to the given value
 * @memberof String
 * @param {*} value
 * @returns {Boolean}
 * @example
 * "hello".equals("Hello"); // false
 */
String.prototype.equals = utils.methodToPrototype(method);
