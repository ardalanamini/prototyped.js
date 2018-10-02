import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface String {
    words(pattern?: RegExp): string[];
  }
}

/**
 * Converts a given string into an array of words
 * @memberof String
 * @param {RegExp} [pattern=/[^a-zA-Z-]+/]
 * @returns {String[]}
 * @example
 * 'I love javaScript!!'.words(); // ["I", "love", "javaScript"]
 * 'python, javaScript & coffee'.words(); // ["python", "javaScript", "coffee"]
 */
String.prototype.words = utils.methodToPrototype(method);
