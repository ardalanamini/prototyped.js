export default function lcm(...nums: number[]): number {
  const gcd: (x: number, y: number) => number = (x, y) =>
    !y ? x : gcd(y, x % y);

  const _lcm: (x: number, y: number) => number = (x, y) => (x * y) / gcd(x, y);

  return nums.reduce((a, b) => _lcm(a, b));
}
