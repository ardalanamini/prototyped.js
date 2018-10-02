import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface Array<T> {
    isEmpty(): boolean;
  }
}

/**
 * Checks if the array is empty
 * @memberof Array
 * @returns {Boolean}
 * @example
 * [1,2].isEmpty(); // false
 * [].isEmpty(); // true
 */
Array.prototype.isEmpty = utils.methodToPrototype(method);
