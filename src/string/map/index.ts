import * as method from "./method";
import * as utils from "../../utils";

export { };

declare global {
  interface String {
    map(fn: (char: string, index: number, chars: string[]) => string): string;
  }
}

/**
 * Just like array.map
 * @memberof String
 * @param {Function} fn
 * @returns {String[]}
 * @example
 * 'Hello'.map((char) => char == 'o' ? 'O' : char); // 'HellO'
 */
String.prototype.map = utils.methodToPrototype(method);
