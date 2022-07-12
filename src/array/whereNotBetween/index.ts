import { filter } from "../../utils.js";

export default whereNotBetween;

/**
 * Filters the array
 * @param arr
 * @param start
 * @param end
 * @example
 * whereNotBetween([1, 2, 2, 3, 4, 4, 5], 3,4); // [1,2,2,5]
 */
function whereNotBetween<T>(arr: T[], start: T, end: T): T[];
/**
 * Filters the array
 * @param arr
 * @param field
 * @param start
 * @param end
 * @example
 * whereNotBetween([{count:1}, {count:20}, {count:15}], "count", 1, 15); // [{count:20}]
 */
function whereNotBetween<T>(
  arr: T[],
  field: string,
  start: unknown,
  end: unknown,
): T[];
function whereNotBetween<T>(
  arr: T[],
  field: string | any,
  start: any,
  end?: any,
): T[] {
  if (end === undefined) {
    end = start as any;
    start = field as any;
    field = undefined as any;
  }

  const iterator = (item: any) => item < start || item > end;

  return filter(arr, field, iterator);
}
