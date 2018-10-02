import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface Array<T> {
    intersect(array: any[]): T[];
  }
}

/**
 * Returns a list of elements that exist in both arrays
 * @memberof Array
 * @param {Array} array
 * @returns {Array}
 * @example
 * [1, 2, 3].intersect([4, 3, 2]); // [2,3]
 */
Array.prototype.intersect = utils.methodToPrototype(method);
