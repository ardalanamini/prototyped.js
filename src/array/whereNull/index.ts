import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface Array<T> {
    whereNull(): Array<null & undefined>;
    whereNull(field: string): Array<null & undefined>;
  }
}

/**
 * Filters the array
 * @memberof Array
 * @param {String} [field]
 * @returns {Array}
 * @example
 * [1, 2, 2, 3, null, undefined, 5].whereNull(); // [null, undefined]
 * [{count:1}, {count:null}, {foo:15}].whereNull("count"); // [{count:null},{foo:15}]
 */
Array.prototype.whereNull = utils.methodToPrototype(method);
