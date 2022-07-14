/**
 * Skips the array
 * @param arr
 * @param [offset]
 * @example
 * skip([2, 1, 2, 5], 1); // [1,2,5]
 */
export default function skip<T>(arr: T[], offset: number): T[] {
  return arr.slice(offset);
}
