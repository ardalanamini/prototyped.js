import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface Array<T> {
    append(value: T): void;
  }
}

/**
 * Same as push but uses concat
 * @memberof Array
 * @param {*} value
 * @example
 * var myArray = [1, 2, 3]
 * myArray.append(0); // myArray => [1, 2, 3, 0]
 */
Array.prototype.append = utils.methodToPrototype(method);
