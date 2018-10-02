import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface String {
    chars(): string[];
  }
}

/**
 * Returns an array of the string's character
 * @memberof String
 * @returns {String[]}
 * @example
 * "Hello".chars(); // ["H", "e", "l", "l", "o"]
 */
String.prototype.chars = utils.methodToPrototype(method);
