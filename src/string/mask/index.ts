import * as method from "./method";
import { addPrototype } from "../../utils";

declare global {
  interface String {
    mask(num?: number, mask?: string): string;
  }
}

/**
 * Replaces all but the last num of characters with the specified mask character
 * @memberof String.prototype
 * @function mask
 * @param {Number} [num=4]
 * @param {String} [mask='*']
 * @returns {String}
 * @example
 * '1234567890'.mask(); // '******7890'
 * '1234567890'.mask(3); // '*******890'
 * '1234567890'.mask(-4, '$'); // '$$$$567890'
 */
addPrototype(String, "mask", method);
