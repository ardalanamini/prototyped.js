import { filter } from "../../utils.js";

/**
 * Filters the array
 * @param arr
 * @param value
 * @example
 * whereIn([1, 2, 2, 3, 4, 4, 5], [3,4]); // [3,4,4]
 */
function whereIn<T>(arr: T[], value: T[]): T[];

/**
 * Filters the array
 * @param arr
 * @param field
 * @param value
 * @example
 * whereIn([{count:1}, {count:20}, {count:15}], "count", [1, 15]); // [{count:1},{count:15}]
 */
function whereIn<T>(arr: T[], field: string, value: unknown[]): T[];
function whereIn<T>(arr: T[], field: any[] | string, value?: any[]): T[] {
  if (value == null) {
    value = field as any[];
    // eslint-disable-next-line no-undefined
    field = undefined as any;
  }

  return filter(arr, field as string, item => value?.includes(item));
}

export default whereIn;
