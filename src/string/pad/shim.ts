import pad from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface String {
    pad(size: number, value?: string): string;
  }
}

/**
 * FillS the string with the given value until the string reaches the specified size
 * @memberof String.prototype
 * @function pad
 * @param {Number} size
 * @param {String} [value=" "]
 * @returns {String}
 * @example
 * "123".pad(5, 0); // "12300"
 * "123".pad(-5, 0); // "00123"
 */
addPrototype(String, "pad", pad);
