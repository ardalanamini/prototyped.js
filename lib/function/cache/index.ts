import * as method from "./method";

declare global {
  interface Function {
    cached?: Map<string, any>;
    cache(...args: any[]): any;
  }
}

/**
 * Returns the cached function results if already runned with this method
 * @memberof Function
 * @param {Array} args
 * @returns {*}
 * @example
 * const test = () => setTimeout(console.log, 1000, `test`);
 * test.cache(); // takes a second to log 'test'
 * test.cache(); // instantly logs the second 'test'
 */
Function.prototype.cache = function(...args) {
  return method(this)(...args);
};
