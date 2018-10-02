import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface Array<T> {
    zip(...arrays: any[][]): any[][];
  }
}

/**
 * Creates an array of elements, grouped based on the position in the original arrays
 * @memberof Array
 * @param {Array[]} arrays
 * @returns {Array}
 * @example
 * ['a', 'b'].zip([1, 2], [true, false]); // [['a', 1, true], ['b', 2, false]]
 * ['a'].zip([1, 2], [true, false]); // [['a', 1, true], [undefined, 2, false]]
 */
Array.prototype.zip = utils.methodToPrototype(method);
