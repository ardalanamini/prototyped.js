import { addPrototype } from "../../utils";
import method from "./method";

declare global {
  interface Array<T> {
    whereNotLike(value: string | RegExp): T[];
    whereNotLike(field: string, value: string | RegExp): T[];
  }
}

/**
 * Filters the array
 * @memberof Array.prototype
 * @function whereNotLike
 * @param {String|RegExp} field
 * @param {String|RegExp} [value]
 * @returns {Array}
 * @example
 * ["foo", "bar", "hello", "world"].whereNotLike("o"); // ["bar"]
 * [{foo:"hello"}, {foo:"bar"}, {foo:"world"}].whereNotLike("foo", /o/i); // [{foo:"bar"}]
 */
addPrototype(Array, "whereNotLike", method);
