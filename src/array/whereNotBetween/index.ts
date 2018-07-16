import * as method from "./method";

declare global {
  interface Array<T> {
    whereNotBetween(start: T, end: T): T[];
    whereNotBetween(field: string, start: any, end: any): T[];
  }
}

/**
 * Filters the array
 * @memberof Array
 * @param {String|any} field
 * @param {any} start
 * @param {any} [end]
 * @returns {Array}
 * @example
 * [1, 2, 2, 3, 4, 4, 5].whereNotBetween(3,4); // [1,2,2,5]
 * [{count:1}, {count:20}, {count:15}].whereNotBetween("count", 1, 15); // [{count:20}]
 */
Array.prototype.whereNotBetween = function(field: string | any, start: any, end?: any) {
  return method(this, field, start, end);
};
