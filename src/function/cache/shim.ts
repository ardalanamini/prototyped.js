import method from "./index.js";

declare global {
  interface Function {
    cached?: Map<string, unknown>;

    cache(...args: unknown[]): unknown;
  }
}

/**
 * Returns the cached function results if already runned with this method
 * @memberof Function
 * @function cache
 * @param {Array} args
 * @returns {*}
 * @example
 * const test = () => setTimeout(console.log, 1000, `test`);
 * test.cache(); // takes a second to log 'test'
 * test.cache(); // instantly logs the second 'test'
 */
Function.prototype.cache = function cache(...args) {
  return method(this as any)(...args);
};
