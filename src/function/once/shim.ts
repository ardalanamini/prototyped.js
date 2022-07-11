import { addPrototype } from "../../utils.js";
import once from "./index.js";

declare global {
  interface Function {
    called?: boolean;

    /**
     * Ensures a function is called only once
     * @param args
     * @example
     * const test = (msg) => console.log(msg);
     * test.once('a'); // logs 'a'
     * test.once('b'); // no log this time
     */
    once(...args: unknown[]): unknown;
  }
}

addPrototype(Function, "once", once);
