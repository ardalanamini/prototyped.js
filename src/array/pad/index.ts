import repeat from "../repeat/index.js";

/**
 * FillS the array with the given value until the array reaches the specified size
 * @param arr
 * @param size
 * @param [value=0]
 * @example
 * pad([1, 2, 3], 5, 0); // [1, 2, 3, 0, 0]
 * @example
 * pad([1, 2, 3], -5, 0); // [0, 0, 1, 2, 3]
 */
export default function pad<T>(
  arr: T[],
  size: number,
  value: T = 0 as never,
): T[] {
  const length = Math.abs(size) - arr.length;

  if (length <= 0) return arr;

  const array = repeat(length, value);

  if (size < 0) return array.concat(arr);

  return arr.concat(array);
}
