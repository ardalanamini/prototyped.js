import swapCase from ".";
import { addPrototype } from "../../utils";

declare global {
  interface String {
    swapCase(): string;
  }
}

/**
 * Returns a copy of the string in which all the case-based characters have had their case swapped
 * @memberof String.prototype
 * @function swapCase
 * @returns {String}
 * @example
 * 'Hello'.swapCase(); // 'hELLO'
 */
addPrototype(String, "swapCase", swapCase);
