import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface Array<T> {
    flatten(depth?: number): any[];
  }
}

/**
 * Flattens an array up to the specified depth
 * @memberof Array
 * @param {Number} [depth=1]
 * @returns {Array}
 * @example
 * [1, [2], 3, 4].flatten(); // [1, 2, 3, 4]
 * [1, [2, [3, [4, 5], 6], 7], 8].flatten(2); // [1, 2, 3, [4, 5], 6, 7, 8]
 */
Array.prototype.flatten = utils.methodToPrototype(method);
