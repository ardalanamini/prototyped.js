import * as method from "./method";

declare global {
  interface String {
    pad(size: number, value?: string): string;
  }
}

/**
 * FillS the string with the given value until the string reaches the specified size
 * @memberof String
 * @param {Number} size
 * @param {String} [value=" "]
 * @returns {String}
 * @example
 * "123".pad(5, 0); // "12300"
 * "123".pad(-5, 0); // "00123"
 */
String.prototype.pad = function(size, value) {
  return method(this as string, size, value);
};
