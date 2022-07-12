/**
 * Calculates the greatest common divisor between two or more numbers
 * @param nums
 * @example
 * gcd(8, 36); // 4
 * @example
 * gcd(...[12, 8, 32]); // 4
 */
export default function gcd(...nums: number[]): number {
  const _gcd = (x: number, y: number) => (!y ? x : gcd(y, x % y));

  return nums.reduce((a, b) => _gcd(a, b));
}
