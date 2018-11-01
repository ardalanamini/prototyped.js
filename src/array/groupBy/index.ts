import * as method from "./method";
import { addPrototype } from "../../utils";

declare global {
  interface Array<T> {
    groupBy(fn: string | ((item: any, index: number, array: any[]) => any)): { [key: string]: T[] };
  }
}

/**
 * Groups the elements of an array based on the given function
 * @memberof Array.prototype
 * @function groupBy
 * @param {String|Function} fn
 * @returns {Object}
 * @example
 * [6.1, 4.2, 6.3].groupBy(Math.floor); // {4: [4.2], 6: [6.1, 6.3]}
 * ['one', 'two', 'three'].groupBy('length'); // {3: ['one', 'two'], 5: ['three']}
 */
addPrototype(Array, "groupBy", method);
