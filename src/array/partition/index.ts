import * as method from "./method";
import { addPrototype } from "../../utils";

declare global {
  interface Array<T> {
    partition(fn: (value: T, index: number, array: any[]) => boolean): [T[], any[]];
  }
}

/**
 * Groups the elements into two arrays, depending on the provided function's truthiness for each element
 * @memberof Array.prototype
 * @function partition
 * @param {Function} fn
 * @returns {Array}
 * @example
 * const users = [{ user: 'barney', age: 36, active: false }, { user: 'fred', age: 40, active: true }];
 * users.partition(o => o.active); // [
 *   [{ 'user': 'fred',    'age': 40, 'active': true }],
 *   [{ 'user': 'barney',  'age': 36, 'active': false }]
 * ]
 */
addPrototype(Array, "partition", method);
