/**
 * Returns every element that exists in any of the two arrays once
 * @param arr
 * @param array
 * @example
 * union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]
 */
export default function union<T extends unknown[], P extends unknown[]>(
  arr: T,
  array: P,
): [...T, ...P] {
  return Array.from(new Set([...arr, ...array])) as never;
}
