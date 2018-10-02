import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface Array<T> {
    sample(): T;
  }
}

/**
 * Returns a random element from an array
 * @memberof Array
 * @returns {*}
 * @example
 * [3, 7, 9, 11].sample(); // 9
 */
Array.prototype.sample = utils.methodToPrototype(method);
