import * as method from "./method";

declare global {
  interface Array<T> {
    whereNotNull(): T[];
    whereNotNull(field: string): T[];
  }
}

/**
 * Filters the array
 * @memberof Array
 * @param {String} [field]
 * @returns {Array}
 * @example
 * [1, 2, 2, 3, null, undefined, 5].whereNotNull(); // [1,2,2,3,5]
 * [{count:1}, {count:null}, {foo:15}].whereNotNull("count"); // [{count:1}]
 */
Array.prototype.whereNotNull = function(field?: string) {
  return method(this, field);
};
