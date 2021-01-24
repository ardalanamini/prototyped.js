import once from ".";
import { addPrototype } from "../../utils";

declare global {
  interface Function {
    called?: boolean;

    once(...args: unknown[]): unknown;
  }
}

/**
 * Ensures a function is called only once
 * @memberof Function.prototype
 * @function once
 * @param {Array} args
 * @returns {*}
 * @example
 * const test = (msg) => console.log(msg);
 * test.once('a'); // logs 'a'
 * test.once('b'); // no log this time
 */
addPrototype(Function, "once", once);
