/**
 * Returns a random element from an array
 * @example
 * sample([3, 7, 9, 11]); // 9
 */
export default function sample<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
