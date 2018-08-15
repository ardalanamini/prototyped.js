
import * as method from "./method";

declare global {
  interface String {
    reduce<T = any>(fn: (prev: T, char: string, index: number, chars: string[]) => T, initialValue?: T): any;
  }
}

/**
 * Just like array.reduce
 * @memberof String
 * @param {Function} fn
 * @param {*} initialValue
 * @returns {*}
 * @example
 * '123'.reduce((prev, char) => prev + (+char), 0); // 6
 */
String.prototype.reduce = function(fn, initialValue) {
  return method(this as string, fn, initialValue);
};
