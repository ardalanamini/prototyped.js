import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface Array<T> {
    last(): T;
  }
}

/**
 * Returns the last item of the array
 * @memberof Array
 * @returns {*}
 * @example
 * [1, 2, 3].last(); // 3
 */
Array.prototype.last = utils.methodToPrototype(method);
