/**
 * Groups the elements into two arrays,
 * depending on the provided function's truthiness for each element
 * @param arr
 * @param fn
 * @example
 * const users = [
 *   { user: 'barney', age: 36, active: false }, { user: 'fred', age: 40, active: true }
 * ];
 * partition(users, o => o.active); // [
 *   [{ 'user': 'fred',    'age': 40, 'active': true }],
 *   [{ 'user': 'barney',  'age': 36, 'active': false }]
 * ]
 */
export default function partition<T>(
  arr: T[],
  fn: (value: T, index: number, array: T[]) => boolean,
): [T[], T[]] {
  return arr.reduce<[T[], T[]]>(
    // eslint-disable-next-line max-params
    (prev, value, index, array) => {
      prev[fn(value, index, array) ? 0 : 1].push(value);

      return prev;
    },
    [[], []],
  );
}
