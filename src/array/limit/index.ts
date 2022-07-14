/**
 * Limits the array
 * @param array
 * @param [maxLength]
 * @example
 * limit([2, 1, 2, 5], 2); // [2,1]
 */
export default function limit<T>(array: T[], maxLength?: number): T[] {
  return array.slice(0, maxLength);
}
