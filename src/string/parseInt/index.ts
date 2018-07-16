import * as method from "./method";

declare global {
  interface String {
    parseInt(radix?: number): number;
  }
}

/**
 * Converts string to an integer of the specified radix
 * @memberof String
 * @param {number} [radix]
 * @returns {number}
 * @example
 * "08".parseInt(); // 8
 */
String.prototype.parseInt = function(radix) {
  return method(this as string, radix);
};
