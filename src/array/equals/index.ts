import objectEquals from "../../object/equals/index.js";
import range from "../range/index.js";

/**
 * Checks if the array is equal to the given value
 * @param arr
 * @param value
 * @example
 * equals([1,2,3], [2,1,3]); // false
 */
export default function equals<T>(arr: T[], value: unknown): value is T[] {
  if (!Array.isArray(value)) return false;

  if (arr.length !== value.length) return false;

  return range(arr.length - 1).every(key => objectEquals(arr[key] as Record<string, unknown>, value[key]));
}
