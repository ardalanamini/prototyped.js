import isString from "../../string/isString/index.js";
import { filter } from "../../utils.js";

/**
 * Filters the array
 * @param arr
 * @param value
 * @example
 * whereLike(["foo", "bar", "hello", "world"], "o"); // ["foo","hello","world"]
 */
function whereLike<T>(arr: T[], value: RegExp | string): T[];

/**
 * Filters the array
 * @param arr
 * @param field
 * @param value
 * @example
 * whereLike([{foo:"hello"}, {foo:"bar"}, {foo:"world"}], "foo", /o/i); // [{foo:"hello"},{foo:"world"}]
 */
function whereLike<T>(arr: T[], field: string, value: RegExp | string): T[];
function whereLike<T>(
  arr: T[],
  field: RegExp | string,
  value?: RegExp | string,
): T[] {
  if (value == null) {
    value = field as RegExp | string;
    // eslint-disable-next-line no-undefined
    field = undefined as any;
  }

  if (isString(value)) value = new RegExp(value, "i");

  return filter(arr, field as string, item => (value as RegExp).test(item as any));
}

export default whereLike;
