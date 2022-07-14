/**
 * Creates an array of elements, grouped based on the position in the original arrays
 * @param arr
 * @param arrays
 * @example
 * zip(['a', 'b'], [1, 2], [true, false]); // [['a', 1, true], ['b', 2, false]]
 * @example
 * zip(['a'], [1, 2], [true, false]); // [['a', 1, true], [undefined, 2, false]]
 */
export default function zip<T>(arr: T[], ...arrays: any[][]): unknown[][] {
  arrays = [arr, ...arrays];

  return Array.from(
    { length: Math.max(...arrays.map(x => x.length)) },
    (m1, i) => Array.from(
      { length: arrays.length },
      (m2, k) => arrays[k][i],
    ),
  );
}
