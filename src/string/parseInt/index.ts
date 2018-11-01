import * as method from "./method";
import { addPrototype } from "../../utils";

declare global {
  interface String {
    parseInt(radix?: number): number;
  }
}

/**
 * Converts string to an integer of the specified radix
 * @memberof String.prototype
 * @function parseInt
 * @param {Number} [radix]
 * @returns {Number}
 * @example
 * "08".parseInt(); // 8
 */
addPrototype(String, "parseInt", method);
