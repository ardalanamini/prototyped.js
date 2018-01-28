export { }

declare global {
  interface Math {
    lcm(...nums: Array<number>): number
  }
}

/**
 * Returns the least common multiple of two or more numbers
 * @memberof Math
 * @param {number[]} nums
 * @returns {number}
 * @example
 * Math.lcm(12, 7); // 84
 * Math.lcm(...[1, 3, 4, 5]); // 60
 */
Math.lcm = (...nums: Array<number>): number => {
  const gcd: (x: number, y: number) => number = (x, y) => (!y ? x : gcd(y, x % y))

  const lcm: (x: number, y: number) => number = (x, y) => x * y / gcd(x, y)

  return [...nums].reduce((a, b) => lcm(a, b))
}
