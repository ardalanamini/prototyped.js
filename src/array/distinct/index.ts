import isString from "../../string/isString/index.js";
import { pathToKeys } from "../../utils.js";

/**
 * Returns all the distinct values of an array
 * @param array
 * @param [fn]
 * @example
 * distinct([1, 2, 2, 3, 4, 4, 5]); // [1,2,3,4,5]
 * @example
 * distinct([{foo:{bar:[0,1]}}, {foo:{bar:[4,1]}}], "foo.bar[1]"); // [{foo:{bar:[0,1]}}]
 * @example
 * distinct([1, 2, 2.2, 3, 4.9, 4, 5], Math.floor); // [1,2,3,4.9,5]
 */
export default function distinct<T>(
  array: T[],
  fn?: string | ((value: T, index: number, array: T[]) => any),
): T[] {
  if (!fn) return [...new Set(array)];

  if (isString(fn)) {
    const keys = pathToKeys(fn);

    fn = (value) => keys.reduce((prev: any, cur) => prev[cur], value);
  }

  const length = array.length;
  const found: { [value: string]: true | undefined } = {};
  const distinct: T[] = [];

  for (let i = 0; i < length; i++) {
    const value = array[i];
    const generatedValue = fn(value, i, array);

    if (found[generatedValue]) continue;

    found[generatedValue] = true;

    distinct.push(value);
  }

  return distinct;
}
