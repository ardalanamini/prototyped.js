/**
 * Returns a list of elements that exist in both arrays
 * @param arr
 * @param array
 * @example
 * intersect([1, 2, 3], [4, 3, 2]); // [2,3]
 */
export default function intersect<T>(arr: T[], array: unknown[]): T[] {
  const set = new Set(array);

  return arr.filter(item => set.has(item));
}
