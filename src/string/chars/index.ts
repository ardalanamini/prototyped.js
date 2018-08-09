import * as method from "./method";

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
String.prototype.chars = function() {
  return method(this as string);
};
