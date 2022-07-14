/**
 * Counts the occurrences of a value in an array
 * @param array
 * @param [value]
 * @example
 * count([1, 1, 2, 1, 2, 3]); // 6
 * @example
 * count([1, 1, 2, 1, 2, 3], 1); // 3
 */
export default function count<Value>(array: Value[], value?: Value): number {
  return value == null
    ? array.length
    : array.reduce((a, v) => a + Number(v === value), 0);
}
