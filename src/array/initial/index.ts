/**
 * Returns all the elements of an array except the last one
 * @example
 * initial([1, 2, 3]); // [1, 2]
 */
export default function initial<T extends unknown[]>(
  array: T,
): T extends [...infer F, unknown] ? F : T {
  return array.slice(0, -1) as never;
}
