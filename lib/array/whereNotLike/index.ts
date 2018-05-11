import * as method from "./method";

declare global {
  interface Array<T> {
    whereNotLike(value: string | RegExp): T[];
    whereNotLike(field: string, value: string | RegExp): T[];
  }
}

/**
 * Filters the array
 * @memberof Array
 * @param {String|RegExp} field
 * @param {String|RegExp} [value]
 * @returns {Array}
 * @example
 * ["foo", "bar", "hello", "world"].whereNotLike("o"); // ["bar"]
 * [{foo:"hello"}, {foo:"bar"}, {foo:"world"}].whereNotLike("foo", /o/i); // [{foo:"bar"}]
 */
Array.prototype.whereNotLike = function(field: string | RegExp, value?: string | RegExp) {
  return method(this, field, value);
};
