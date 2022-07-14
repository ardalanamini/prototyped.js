import gcd from "../gcd/index.js";

/**
 * Returns the least common multiple of two or more numbers
 * @param nums
 * @example
 * lcm(12, 7); // 84
 * @example
 * lcm(...[1, 3, 4, 5]); // 60
 */
export default function lcm(...nums: number[]): number {
  return nums.reduce((x, y) => (x * y) / gcd(x, y));
}
