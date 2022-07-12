/**
 * Returns all elements in an array except for the first one
 * @example
 * tail([1, 2, 3]); // [2, 3]
 */
export default function tail<T extends unknown[]>(
  arr: T,
): T extends [unknown, ...infer F] ? F : T {
  return arr.length > 1 ? (arr.slice(1) as never) : ([] as never);
}
