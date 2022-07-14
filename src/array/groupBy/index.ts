/**
 * Groups the elements of an array based on the given function
 * @param array
 * @param fn
 * @example
 * groupBy([6.1, 4.2, 6.3], Math.floor); // {4: [4.2], 6: [6.1, 6.3]}
 * @example
 * groupBy(['one', 'two', 'three'], 'length'); // {3: ['one', 'two'], 5: ['three']}
 */
export default function groupBy<T>(
  array: T[],
  fn: string | ((item: T, index: number, array: T[]) => any),
): Record<string, T[]> {
  return array
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    .map(typeof fn === "function" ? fn : value => (value as any)[fn])
    .reduce((prev, value, i) => {
      prev[value] = (prev[value] || []).concat(array[i]);

      return prev;
    }, {});
}
