import { filter } from "../../utils.js";

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
// eslint-disable-next-line
function whereBetween<T>(
  arr: T[],
  field: any | string,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  start: any,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  end?: any,
): T[] {
  if (end == null) {
    end = start;
    start = field;
    // eslint-disable-next-line no-undefined
    field = undefined;
  }

  return filter(arr, field, item => item >= start && item <= end);
}

export default whereBetween;
