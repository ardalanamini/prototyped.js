export default function gcd(...nums: number[]): number {
  const _gcd = (x: number, y: number) => (!y ? x : gcd(y, x % y));

  return nums.reduce((a, b) => _gcd(a, b));
}
