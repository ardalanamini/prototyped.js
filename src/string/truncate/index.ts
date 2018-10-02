import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface String {
    truncate(num: number, truncateString?: string): string;
  }
}

/**
 * Truncates a string up to a specified length
 * @memberof String
 * @param {Number} num
 * @param {String} [truncateString="..."]
 * @returns {String}
 * @example
 * 'boomerang'.truncate(7); // 'boom...'
 * 'boomerang'.truncate(7, '....'); // 'boo....'
 */
String.prototype.truncate = utils.methodToPrototype(method);
