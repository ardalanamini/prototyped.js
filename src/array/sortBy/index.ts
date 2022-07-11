import isString from "../../string/isString/index.js";
import { pathToKeys } from "../../utils.js";

/**
 * Groups the elements of an array based on the given function and
 * returns the count of elements in each group
 * @param arr
 * @param fn
 * @example
 * sortBy(['five', 'three', 'one'], 'length'); // ['one', 'five', 'three']
 * @example
 * sortBy(['five', 'three', 'one'], (value) => -value.length); // ['three', 'five', 'one']
 */
export default function sortBy<T>(
  arr: T[],
  fn: string | ((value: T) => number),
): T[] {
  let reducer = fn as (value: T) => number;

  if (isString(fn)) {
    const keys = pathToKeys(fn);

    reducer = (value): number =>
      keys.reduce((prev, cur) => (prev as any)[cur], value) as any;
  }

  return arr.sort((a, b) => reducer(a) - reducer(b));
}
