/**
 * Determines whether the collection contains a given item
 * @param array
 * @param value
 * @param [fromIndex]
 * @example
 * contains([1, 2, 3], 2); // true
 * @example
 * contains([1, 2, 3], 2, 2); // false
 */
export default function contains<Value>(
  array: Value[],
  value: Value,
  fromIndex?: number,
): boolean {
  return array.includes(value, fromIndex);
}
