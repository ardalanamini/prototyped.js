import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface String {
    reverse(): string;
  }
}

/**
 * Reverses the string
 * @memberof String
 * @returns {String}
 * @example
 * "foobar".reverse(); // "raboof"
 */
String.prototype.reverse = utils.methodToPrototype(method);
