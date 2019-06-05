import { addPrototype } from "../../utils";
import method from "./method";

declare global {
  interface Function {
    defer(...args: any[]): any;
  }
}

/**
 * Defers invoking the function until the current call stack has cleared
 * @memberof Function.prototype
 * @function defer
 * @param {Array} args
 * @returns {*}
 * @example
 * const test = (msg) => console.log(msg);
 * test.defer('a'), test('b'); // logs 'b' then 'a'
 */
addPrototype(Function, "defer", method);
