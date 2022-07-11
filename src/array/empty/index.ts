/**
 * Empty the array
 * @param arr
 * @example
 * const arr = [1,3];
 * empty(arr);
 * // arr = []
 */
export default function empty<T>(arr: T[]): void {
  arr.length = 0;
}
