import { filter } from "../../utils.js";

export default whereBetween;

/**
 * Filters the array
 * @param arr
 * @param start
 * @param end
 * @example
 * whereBetween([1, 2, 2, 3, 4, 4, 5], 3,4); // [3,4,4]
 */
function whereBetween<T>(arr: T[], start: T, end: T): T[];
/**
 * Filters the array
 * @param arr
 * @param field
 * @param start
 * @param end
 * @example
 * whereBetween([{count:1}, {count:20}, {count:15}], "count", 1, 15); // [{count:1},{count:15}]
 */
function whereBetween<T>(
  arr: T[],
  field: string,
  start: unknown,
  end: unknown,
): T[];
function whereBetween<T>(
  arr: T[],
  field: string | any,
  start: any,
  end?: any,
): T[] {
  if (end === undefined) {
    end = start;
    start = field;
    field = undefined;
  }

  const iterator = (item: any) => item >= start && item <= end;

  return filter(arr, field, iterator);
}
