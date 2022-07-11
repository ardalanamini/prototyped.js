/**
 * Returns the least common multiple of two or more numbers
 * @param nums
 * @example
 * lcm(12, 7); // 84
 * @example
 * lcm(...[1, 3, 4, 5]); // 60
 */
export default function lcm(...nums: number[]): number {
  const gcd: (x: number, y: number) => number = (x, y) =>
    !y ? x : gcd(y, x % y);

  const _lcm: (x: number, y: number) => number = (x, y) => (x * y) / gcd(x, y);

  return nums.reduce((a, b) => _lcm(a, b));
}
