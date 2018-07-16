import * as method from "./method";

declare global {
  interface Array<T> {
    whereLike(value: string | RegExp): T[];
    whereLike(field: string, value: string | RegExp): T[];
  }
}

/**
 * Filters the array
 * @memberof Array
 * @param {String|RegExp} field
 * @param {String|RegExp} [value]
 * @returns {Array}
 * @example
 * ["foo", "bar", "hello", "world"].whereLike("o"); // ["foo","hello","world"]
 * [{foo:"hello"}, {foo:"bar"}, {foo:"world"}].whereLike("foo", /o/i); // [{foo:"hello"},{foo:"world"}]
 */
Array.prototype.whereLike = function(field: string | RegExp, value?: string | RegExp) {
  return method(this, field, value);
};
