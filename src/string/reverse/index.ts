import * as method from "./method";
import { addPrototype } from "../../utils";

declare global {
  interface String {
    reverse(): string;
  }
}

/**
 * Reverses the string
 * @memberof String.prototype
 * @function reverse
 * @returns {String}
 * @example
 * "foobar".reverse(); // "raboof"
 */
addPrototype(String, "reverse", method);
