import * as method from "./method";

declare global {
  interface String {
    swapCase(): string;
  }
}

/**
 * Returns a copy of the string in which all the case-based characters have had their case swapped
 * @memberof String
 * @returns {String}
 * @example
 * 'Hello'.swapCase(); // 'hELLO'
 */
String.prototype.swapCase = function() {
  return method(this as string);
};
