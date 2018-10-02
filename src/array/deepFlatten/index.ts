import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface Array<T> {
    deepFlatten(): any[];
  }
}

/**
 * Deep flattens an array
 * @memberof Array
 * @returns {Array}
 * @example
 * [1, [2], [[3], 4], 5].deepFlatten(); // [1,2,3,4,5]
 */
Array.prototype.deepFlatten = utils.methodToPrototype(method);
