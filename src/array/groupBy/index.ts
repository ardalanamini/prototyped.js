export default function groupBy<T>(
  array: T[],
  fn: string | ((item: T, index: number, array: T[]) => any),
): { [key: string]: T[] } {
  return array
    .map(typeof fn === "function" ? fn : (value) => (value as any)[fn])
    .reduce((prev, value, i) => {
      prev[value] = (prev[value] || []).concat(array[i]);

      return prev;
    }, {});
}
