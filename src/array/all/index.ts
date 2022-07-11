/**
 * Returns `true` if the provided predicate function
 * returns `true` for all elements in a collection,`false` otherwise
 * @param array
 * @param [fn=Boolean]
 * @example
 * all([4, 2, 3], (x) => x > 1); // true
 * @example
 * all([1, 2, 3]); // true
 */
export default function all<T>(
  array: T[],
  fn: (value: T, index: number, array: T[]) => boolean = Boolean,
): boolean {
  return array.every(fn);
}
