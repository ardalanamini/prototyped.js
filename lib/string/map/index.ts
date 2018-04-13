import * as method from "./method";

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
 * @returns {string[]}
 * @example
 * 'Hello'.map((char) => char == 'o' ? 'O' : char); // 'HellO'
 */
String.prototype.map = function(fn) {
  return method(this as string, fn);
};
