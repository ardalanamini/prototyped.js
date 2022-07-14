/**
 * Calculates the greatest common divisor between two or more numbers
 * @param nums
 * @example
 * gcd(8, 36); // 4
 * @example
 * gcd(...[12, 8, 32]); // 4
 */
export default function gcd(...nums: number[]): number {
  // eslint-disable-next-line no-negated-condition
  return nums.reduce((x, y) => (!y ? x : gcd(y, x % y)));
}
