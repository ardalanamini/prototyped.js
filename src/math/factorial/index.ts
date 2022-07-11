/**
 * Calculates the factorial of a number
 * @param n
 * @example
 * factorial(6); // 720
 */
export default function factorial(n: number): number {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
