import * as method from "./method";
import { addPrototype } from "../../utils";

declare global {
  interface String {
    reduce<T = any>(fn: (prev: T, char: string, index: number, chars: string[]) => T, initialValue?: T): any;
  }
}

/**
 * Just like array.reduce
 * @memberof String.prototype
 * @function reduce
 * @param {Function} fn
 * @param {*} initialValue
 * @returns {*}
 * @example
 * '123'.reduce((prev, char) => prev + (+char), 0); // 6
 */
addPrototype(String, "reduce", method);
