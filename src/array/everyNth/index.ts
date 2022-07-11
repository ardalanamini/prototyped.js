/**
 * Returns every nth element in an array
 * @param array
 * @param n
 * @example
 * everyNth([1, 2, 3, 4, 5, 6], 2); // [ 2, 4, 6 ]
 */
export default function everyNth<T>(array: T[], n: number): T[] {
  return array.filter((e, i) => i % n === n - 1);
}
