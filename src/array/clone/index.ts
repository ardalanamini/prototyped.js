import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface Array<T> {
    clone(deep?: boolean): T[];
  }
}

/**
 * Returns the cloned array
 * @memberof Array
 * @param {Boolean} [deep=false]
 * @returns {Array}
 * @example
 * [1, 2, 3].clone(); // [1, 2, 3]
 */
Array.prototype.clone = utils.methodToPrototype(method);
