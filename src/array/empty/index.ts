import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface Array<T> {
    empty(): void;
  }
}

/**
 * Empty the array
 * @memberof Array
 * @example
 * const arr = [1,3];
 * arr.empty();
 * // arr = []
 */
Array.prototype.empty = utils.methodToPrototype(method);
