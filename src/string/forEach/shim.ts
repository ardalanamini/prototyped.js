import forEach from ".";
import { addPrototype } from "../../utils";

declare global {
  interface String {
    forEach(fn: (char: string, index: number, chars: string[]) => void): void;
  }
}

/**
 * Just like array.forEach
 * @memberof String.prototype
 * @function forEach
 * @param {Function} fn
 * @returns {void}
 * @example
 * 'Hello'.forEach((char, index) => char == 'o' && consol.log(index)); // console logs 4
 */
addPrototype(String, "forEach", forEach);
