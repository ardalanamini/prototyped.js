import * as method from "./method";
import { addPrototype } from "../../utils";

declare global {
  interface String {
    truncate(num: number, truncateString?: string): string;
  }
}

/**
 * Truncates a string up to a specified length
 * @memberof String.prototype
 * @function truncate
 * @param {Number} num
 * @param {String} [truncateString="..."]
 * @returns {String}
 * @example
 * 'boomerang'.truncate(7); // 'boom...'
 * 'boomerang'.truncate(7, '....'); // 'boo....'
 */
addPrototype(String, "truncate", method);
