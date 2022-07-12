/**
 * Returns `true` if the provided predicate function
 * returns `true` for at least one element in a collection,
 * `false` otherwise
 * @param array
 * @param [fn=Boolean]
 * @example
 * any([0, 1, 2, 0], (x) => x >= 2); // true
 * @example
 * any([0, 0, 1, 0]); // true
 */
export default function any<T>(
  array: T[],
  fn: (value: T, index: number, array: T[]) => boolean = Boolean,
): boolean {
  return array.some(fn);
}
