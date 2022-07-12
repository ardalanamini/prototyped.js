import { filter } from "../../utils.js";

export default whereNotIn;

/**
 * Filters the array
 * @param arr
 * @param value
 * @example
 * whereNotIn([1, 2, 2, 3, 4, 4, 5], [3,4]); // [1,2,2,5]
 */
function whereNotIn<T>(arr: T[], value: T[]): T[];
/**
 * Filters the array
 * @param arr
 * @param field
 * @param value
 * @example
 * whereNotIn([{count:1}, {count:20}, {count:15}], "count", [1, 15]); // [{count:20}]
 */
function whereNotIn<T>(arr: T[], field: string, value: unknown[]): T[];
function whereNotIn<T>(arr: T[], field: string | any[], value?: any[]): T[] {
  if (value === undefined) {
    value = field as any[];
    field = undefined as any;
  }

  const iterator = (item: any) => (value as any[]).indexOf(item) === -1;

  return filter(arr, field as string, iterator);
}
