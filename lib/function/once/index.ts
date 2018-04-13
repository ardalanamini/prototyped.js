import * as method from "./method";

declare global {
  interface Function {
    called?: boolean;
    once(...args: any[]): any;
  }
}

/**
 * Ensures a function is called only once
 * @memberof Function
 * @param {Array} args
 * @returns {*}
 * @example
 * const test = (msg) => console.log(msg);
 * test.once('a'); // logs 'a'
 * test.once('b'); // no log this time
 */
Function.prototype.once = function(...args) {
  return method(this, ...args);
};
