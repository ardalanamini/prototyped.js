import reverse from "./index.js";
import { addPrototype } from "../../utils.js";

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
addPrototype(String, "reverse", reverse);
