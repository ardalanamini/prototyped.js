/**
 * Groups the elements of an array based on the given function and
 * returns the count of elements in each group
 * @param array
 * @param fn
 * @example
 * countBy([6.1, 4.2, 6.3], Math.floor); // { 4: 1, 6: 2 }
 * @example
 * countBy(['one', 'two', 'three'], 'length'); // { 3: 2, 5: 1 }
 */
export default function countBy<Value>(
  array: Value[],
  fn: string | ((value: Value, index: number, array: Value[]) => any),
): { [key: string]: number } {
  return array
    .map(typeof fn === "function" ? fn : (value: any) => value[fn])
    .reduce((prev, value: string) => {
      prev[value] = (prev[value] || 0) + 1;

      return prev;
    }, {});
}
