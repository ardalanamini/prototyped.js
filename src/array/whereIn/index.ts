import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface Array<T> {
    whereIn(value: T[]): T[];
    whereIn(field: string, value: any[]): T[];
  }
}

/**
 * Filters the array
 * @memberof Array
 * @param {String|Array} field
 * @param {Array} [value]
 * @returns {Array}
 * @example
 * [1, 2, 2, 3, 4, 4, 5].whereIn([3,4]); // [3,4,4]
 * [{count:1}, {count:20}, {count:15}].whereIn("count", [1, 15]); // [{count:1},{count:15}]
 */
Array.prototype.whereIn = utils.methodToPrototype(method);
