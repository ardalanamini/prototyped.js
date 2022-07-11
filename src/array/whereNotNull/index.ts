import { filter } from "../../utils.js";

/**
 * Filters the array
 * @param arr
 * @param field
 * @example
 * whereNotNull([1, 2, 2, 3, null, undefined, 5]); // [1,2,2,3,5]
 * @example
 * whereNotNull([{count:1}, {count:null}, {foo:15}], "count"); // [{count:1}]
 */
export default function whereNotNull<T>(arr: T[], field?: string): T[] {
  const iterator = (item: any) => item !== null && item !== undefined;

  return filter(arr, field, iterator);
}
