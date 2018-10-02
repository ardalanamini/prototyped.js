import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface Array<T> {
    crossJoin<P = any>(array: P[]): Array<[T, P]>;
  }
}

/**
 * Cross joins the array's values among the given arrays, returning a Cartesian product with all possible permutations
 * @memberof Array
 * @param {Array} array
 * @returns {Array[]}
 * @example
 * [1, 2].crossJoin(['a', 'b']); // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
 */
Array.prototype.crossJoin = utils.methodToPrototype(method);
