/**
 * Returns all the distinct values of an array
 * @param array
 * @param fn
 * @example
 * distinctBy([1, 2, 2, 3, 4, 4, 5], (a, b) => a === b); // [1,2,3,4,5]
 */
export default function distinctBy<T>(
  array: T[],
  fn: (a: T, b: T) => boolean,
): T[] {
  const distinct: T[] = [];

  array.forEach((a) => {
    let had = false;

    for (const d of distinct) {
      if (fn(a, d)) {
        had = true;

        break;
      }
    }

    if (!had) distinct.push(a);
  });

  return distinct;
}
