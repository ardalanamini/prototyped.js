/**
 * Given an array of valid property identifiers and an array of values,
 * return an object associating the properties to the values
 * @param arr
 * @param array
 * @example
 * zipObject(['a', 'b', 'c'], [1, 2]); // {a: 1, b: 2, c: undefined}
 * @example
 * zipObject(['a', 'b'], [1, 2, 3]); // {a: 1, b: 2}
 */
export default function zipObject<T>(
  arr: T[],
  array: any[],
): Record<string, unknown> {
  return arr.reduce(
    (obj: any, prop, index) => {
      obj[prop] = array[index];

      return obj;
    },
    {},
  );
}
