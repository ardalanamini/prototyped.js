/**
 * Returns the item at a given index. If the index does not exist, def is returned
 * @param array
 * @param index
 * @param [fallback=null]
 * @example
 * get([1, 2, 3], 0, 'default value'); // 1
 * @example
 * get([1, 2, 3], 4, 0); // 0
 */
export default function get<T extends unknown[], I extends number, F = null>(
  array: T,
  index: I,
  fallback: F = null as never,
): T[I] | F {
  return index >= array.length ? fallback : array[index];
}
