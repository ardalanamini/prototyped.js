import * as method from "./method";

declare global {
  interface Array<T> {
    whereBetween(start: T, end: T): T[];
    whereBetween(field: string, start: any, end: any): T[];
  }
}

/**
 * Filters the array
 * @memberof Array
 * @param {String|*} field
 * @param {*} start
 * @param {*} [end]
 * @returns {Array}
 * @example
 * [1, 2, 2, 3, 4, 4, 5].whereBetween(3,4); // [3,4,4]
 * [{count:1}, {count:20}, {count:15}].whereBetween("count", 1, 15); // [{count:1},{count:15}]
 */
Array.prototype.whereBetween = function(field: string | any, start: any, end?: any) {
  return method(this, field, start, end);
};
