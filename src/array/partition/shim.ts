import { addPrototype } from "../../utils.js";
import partition from "./index.js";

declare global {
  interface Array<T> {
    /**
     * Groups the elements into two arrays,
     * depending on the provided function's truthiness for each element
     * @param fn
     * @example
     * const users = [
     *   { user: 'barney', age: 36, active: false }, { user: 'fred', age: 40, active: true }
     * ];
     * users.partition(o => o.active); // [
     *   [{ 'user': 'fred',    'age': 40, 'active': true }],
     *   [{ 'user': 'barney',  'age': 36, 'active': false }]
     * ]
     */
    partition(fn: (value: T, index: number, array: T[]) => boolean): [T[], T[]];
  }
}

addPrototype(Array, "partition", partition);
