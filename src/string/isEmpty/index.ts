import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface String {
    isEmpty(): boolean;
  }
}

/**
 * Checks if the string is empty
 * @memberof String
 * @returns {Boolean}
 * @example
 * "123".isEmpty(); // false
 * "".isEmpty(); // true
 */
String.prototype.isEmpty = utils.methodToPrototype(method);
