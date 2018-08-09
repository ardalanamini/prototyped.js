import * as method from "./method";

declare global {
  interface String {
    mask(num?: number, mask?: string): string;
  }
}

/**
 * Replaces all but the last num of characters with the specified mask character
 * @memberof String
 * @param {Number} [num=4]
 * @param {String} [mask='*']
 * @returns {String}
 * @example
 * '1234567890'.mask(); // '******7890'
 * '1234567890'.mask(3); // '*******890'
 * '1234567890'.mask(-4, '$'); // '$$$$567890'
 */
String.prototype.mask = function(num, mask) {
  return method(this as string, num, mask);
};
