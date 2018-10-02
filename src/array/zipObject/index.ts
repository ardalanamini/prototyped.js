import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface Array<T> {
    zipObject(array: any[]): object;
  }
}

/**
 * Given an array of valid property identifiers and an array of values,
 * return an object associating the properties to the values
 * @memberof Array
 * @param {Array} array
 * @returns {Object}
 * @example
 * ['a', 'b', 'c'].zipObject([1, 2]); // {a: 1, b: 2, c: undefined}
 * ['a', 'b'].zipObject([1, 2, 3]); // {a: 1, b: 2}
 */
Array.prototype.zipObject = utils.methodToPrototype(method);
