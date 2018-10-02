import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface Array<T> {
    count(value?: T): number;
  }
}

/**
 * Counts the occurrences of a value in an array
 * @memberof Array
 * @param {*} [value]
 * @returns {Number}
 * @example
 * [1, 1, 2, 1, 2, 3].count(); // 6
 * [1, 1, 2, 1, 2, 3].count(1); // 3
 */
Array.prototype.count = utils.methodToPrototype(method);
