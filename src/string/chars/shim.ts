import chars from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface String {
    chars(): string[];
  }
}

/**
 * Returns an array of the string's character
 * @memberof String.prototype
 * @function chars
 * @returns {String[]}
 * @example
 * "Hello".chars(); // ["H", "e", "l", "l", "o"]
 */
addPrototype(String, "chars", chars);
