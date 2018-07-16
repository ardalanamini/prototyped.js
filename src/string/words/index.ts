import * as method from "./method";

declare global {
  interface String {
    words(pattern?: RegExp): string[];
  }
}

/**
 * Converts a given string into an array of words
 * @memberof String
 * @param {RegExp} pattern
 * @returns {string[]}
 * @example
 * 'I love javaScript!!'.words(); // ["I", "love", "javaScript"]
 * 'python, javaScript & coffee'.words(); // ["python", "javaScript", "coffee"]
 */
String.prototype.words = function(pattern) {
  return method(this as string, pattern);
};
