import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface Function {
    defer(...args: any[]): any;
  }
}

/**
 * Defers invoking the function until the current call stack has cleared
 * @memberof Function
 * @param {Array} args
 * @returns {*}
 * @example
 * const test = (msg) => console.log(msg);
 * test.defer('a'), test('b'); // logs 'b' then 'a'
 */
Function.prototype.defer = utils.methodToPrototype(method);
