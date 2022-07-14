/**
 * Cross joins the array's values among the given arrays,
 * returning a Cartesian product with all possible permutations
 * @param array1
 * @param array2
 * @example
 * crossJoin([1, 2], ['a', 'b']); // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
 */
export default function crossJoin<T, P>(array1: T[], array2: P[]): Array<[T, P]> {
  const joined: Array<[T, P]> = [];

  array1.forEach(item => array2.forEach(value => joined.push([item, value])));

  return joined;
}
