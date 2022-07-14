/**
 * Flattens an array up to the specified depth
 * @param arr
 * @param [depth=1]
 * @example
 * flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
 * @example
 * flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
 */
export default function flatten<T>(arr: T[], depth = 1): unknown[] {
  if (depth === 1) return arr.reduce<unknown[]>((prev, value) => prev.concat(value), []);


  return arr.reduce<unknown[]>(
    (prev, value) => prev.concat(Array.isArray(value) ? flatten(value, depth - 1) : value),
    [],
  );
}
