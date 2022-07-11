/**
 * Returns the first item of the array
 * @param array
 * @example
 * first([1, 2, 3]); // 1
 */
export default function first<T>(array: [T, ...unknown[]]): T {
  return array[0];
}
