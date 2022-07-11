/**
 * Adds an item to the beginning of the array
 * @param arr
 * @param value
 * @example
 * let myArray = [1, 2, 3]
 * prepend(myArray, 0); // myArray => [0, 1, 2, 3]
 */
export default function prepend<T>(arr: T[], value: T): number {
  const array = [...arr];

  arr.length = 0;

  return arr.push(...[value].concat(array));
}
