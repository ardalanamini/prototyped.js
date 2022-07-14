import { filter } from "../../utils.js";

/**
 * Filters the array
 * @param arr
 * @param [field]
 * @example
 * whereNull([1, 2, 2, 3, null, undefined, 5]); // [null, undefined]
 * @example
 * whereNull([{count:1}, {count:null}, {foo:15}], "count"); // [{count:null},{foo:15}]
 */
export default function whereNull<T>(arr: T[], field?: string): T[] {
  return filter(arr, field, item => item == null);
}
