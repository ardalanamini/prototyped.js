import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface Array<T> {
    initial(): T[];
  }
}

/**
 * Returns all the elements of an array except the last one
 * @memberof Array
 * @returns {Array}
 * @example
 * [1, 2, 3].initial(); // [1, 2]
 */
Array.prototype.initial = utils.methodToPrototype(method);
