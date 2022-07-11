/**
 * Merges array with the given array
 * @param arr
 * @param arr2
 * @example
 * let myArray = [1, 2, 3]
 * merge(myArray, [0, 6 , 2]); // myArray => [1, 2, 3, 0, 6, 2]
 */
export default function merge<T>(arr: T[], arr2: unknown[]): void {
  arr.push(...(arr2 as never[]));
}
