/**
 * limits the array
 * @param array
 * @param [limit]
 * @example
 * limit([2, 1, 2, 5], 2); // [2,1]
 */
export default function limit<T>(array: T[], limit?: number): T[] {
  return array.slice(0, limit);
}
