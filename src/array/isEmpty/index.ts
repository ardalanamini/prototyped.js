/**
 * Checks if the array is empty
 * @example
 * isEmpty([1,2]); // false
 * @example
 * isEmpty([]); // true
 */
export default function isEmpty<T>(array: T[]): boolean {
  return array.length === 0;
}
