import method from "./index.js";

declare global {
  interface Function {
    cached?: Map<string, unknown>;

    /**
     * Returns the cached function results if already runned with this method
     * @param args
     * @example
     * const test = () => setTimeout(console.log, 1000, `test`);
     * test.cache(); // takes a second to log 'test'
     * test.cache(); // instantly logs the second 'test'
     */
    cache(...args: unknown[]): unknown;
  }
}

Function.prototype.cache = function cache(...args): unknown {
  return method(this as any)(...args);
};
