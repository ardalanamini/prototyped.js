import words from ".";
import { addPrototype } from "../../utils";

declare global {
  interface String {
    words(pattern?: RegExp): string[];
  }
}

/**
 * Converts a given string into an array of words
 * @memberof String.prototype
 * @function words
 * @param {RegExp} [pattern=/[^a-zA-Z-]+/]
 * @returns {String[]}
 * @example
 * 'I love javaScript!!'.words(); // ["I", "love", "javaScript"]
 * 'python, javaScript & coffee'.words(); // ["python", "javaScript", "coffee"]
 */
addPrototype(String, "words", words);
