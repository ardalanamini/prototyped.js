/**
 * Returns the difference between this and another array
 * if `comp` is given, filters out all values from an array for which the comparator function
 * does not return true
 * @param array1
 * @param array2
 * @param [comp]
 * @example
 * diff([1, 2, 3], [1, 2, 4]); // [3]
 * @example
 * diff([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); // [1, 1.2]
 */
export default function diff<T, P>(
  array1: T[],
  array2: P[],
  comp?: (a: T, b: P) => boolean,
): T[] {
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  if (comp) return array1.filter(a => array2.findIndex(b => comp(a, b)) === -1);

  const set = new Set(array2);

  return array1.filter(item => !set.has(item as never));
}
