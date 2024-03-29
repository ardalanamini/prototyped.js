import { addPrototype } from "../../utils.js";
import whereNotLike from "./index.js";

declare global {
  interface Array<T> {

    /**
     * Filters the array
     * @param value
     * @example
     * ["foo", "bar", "hello", "world"].whereNotLike("o"); // ["bar"]
     */
    whereNotLike(value: RegExp | string): T[];

    /**
     * Filters the array
     * @param field
     * @param value
     * @example
     * [{foo:"hello"}, {foo:"bar"}, {foo:"world"}].whereNotLike("foo", /o/i); // [{foo:"bar"}]
     */
    whereNotLike(field: string, value: RegExp | string): T[];
  }
}

addPrototype(Array, "whereNotLike", whereNotLike);
