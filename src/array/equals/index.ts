import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface Array<T> {
    equals(value: any): boolean;
  }
}

/**
 * Checks if the array is equal to the given value
 * @memberof Array
 * @param {*} value
 * @returns {Boolean}
 * @example
 * [1,2,3].equals([2,1,3]); // false
 */
Array.prototype.equals = utils.methodToPrototype(method);
