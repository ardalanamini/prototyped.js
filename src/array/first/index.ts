import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface Array<T> {
    first(): T;
  }
}

/**
 * Returns the first item of the array
 * @memberof Array
 * @returns {*}
 * @example
 * [1, 2, 3].first(); // 1
 */
Array.prototype.first = utils.methodToPrototype(method);
