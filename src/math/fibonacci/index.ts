/**
 * Generates an array, containing the Fibonacci sequence, up until the nth term
 * @param nth
 * @example
 * fibonacci(6); // [0, 1, 1, 2, 3, 5]
 */
export default function fibonacci(nth: number): number[] {
  return Array.from<number>({ length: nth }).reduce<number[]>(
    (prev, value, index) => prev.concat(index > 1 ? prev[index - 1] + prev[index - 2] : index),
    [],
  );
}
