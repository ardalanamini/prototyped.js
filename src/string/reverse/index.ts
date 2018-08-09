import * as method from "./method";

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
String.prototype.reverse = function() {
  return method(this as string);
};
