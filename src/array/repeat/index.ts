/**
 * Initializes and fills an array with the specified value
 * @param n
 * @param [value=0]
 * @example
 * repeat(5, 2); // [2,2,2,2,2]
 */
export default function repeat<T = 0>(n: number, value: T = 0 as never): T[] {
  return Array(n).fill(value);
}
