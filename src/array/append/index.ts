/**
 * Same as push but uses concat
 * @param array
 * @param value
 * @example
 * const myArray = [1, 2, 3]
 * append(myArray, 0); // myArray => [1, 2, 3, 0]
 */
export default function append<T>(array: T[], value: T): number {
  const newArray = array.concat([value]);

  array.length = 0;

  return array.push(...newArray);
}
