/**
 * Returns all indices of value in the array. If value never occurs, returns []
 * @param array
 * @param value
 * @example
 * indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
 * @example
 * indexOfAll([1, 2, 3], 4); // []
 */
export default function indexOfAll<T>(array: T[], value: T): number[] {
  const indices: number[] = [];

  array.forEach((item, index) => item === value && indices.push(index));

  return indices;
}
