import { addPrototype } from "../../utils.js";
import defer from "./index.js";

declare global {
  interface Function {
    /**
     * Defers invoking the function until the current call stack has cleared
     * @param args
     * @example
     * const test = (msg) => console.log(msg);
     * test.defer('a'), test('b'); // logs 'b' then 'a'
     */
    defer(...args: unknown[]): NodeJS.Timeout;
  }
}

addPrototype(Function, "defer", defer);
