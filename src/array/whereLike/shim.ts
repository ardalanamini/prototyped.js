import { addPrototype } from "../../utils.js";
import whereLike from "./index.js";

declare global {
  interface Array<T> {
    /**
     * Filters the array
     * @param value
     * @example
     * ["foo", "bar", "hello", "world"].whereLike("o"); // ["foo","hello","world"]
     */
    whereLike(value: string | RegExp): T[];

    /**
     * Filters the array
     * @param field
     * @param value
     * @example
     * [{foo:"hello"}, {foo:"bar"}, {foo:"world"}].whereLike("foo", /o/i); // [{foo:"hello"},{foo:"world"}]
     */
    whereLike(field: string, value: string | RegExp): T[];
  }
}

addPrototype(Array, "whereLike", whereLike);
