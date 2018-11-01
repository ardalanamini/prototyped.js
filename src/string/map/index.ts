import * as method from "./method";
import { addPrototype } from "../../utils";

export { };

declare global {
  interface String {
    map(fn: (char: string, index: number, chars: string[]) => string): string;
  }
}

/**
 * Just like array.map
 * @memberof String.prototype
 * @function map
 * @param {Function} fn
 * @returns {String[]}
 * @example
 * 'Hello'.map((char) => char == 'o' ? 'O' : char); // 'HellO'
 */
addPrototype(String, "map", method);
