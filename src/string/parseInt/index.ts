import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface String {
    parseInt(radix?: number): number;
  }
}

/**
 * Converts string to an integer of the specified radix
 * @memberof String
 * @param {Number} [radix]
 * @returns {Number}
 * @example
 * "08".parseInt(); // 8
 */
String.prototype.parseInt = utils.methodToPrototype(method);
