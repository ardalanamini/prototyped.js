
import * as method from "./method";

export { };

declare global {
  interface String {
    forEach(fn: (char: string, index: number, chars: string[]) => void): void;
  }
}

/**
 * Just like array.forEach
 * @memberof String
 * @param {Function} fn
 * @returns {void}
 * @example
 * 'Hello'.forEach((char, index) => char == 'o' && consol.log(index)); // console logs 4
 */
String.prototype.forEach = function(fn) {
  return method(this as string, fn);
};
