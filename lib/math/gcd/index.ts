export { }

declare global {
  interface Math {
    gcd(...nums: Array<number>): number
  }
}

/**
 * Calculates the greatest common divisor between two or more numbers
 * @memberof Math
 * @param {number[]} nums
 * @returns {number}
 * @example
 * Math.gcd(8, 36); // 4
 * Math.gcd(...[12, 8, 32]); // 4
 */
Math.gcd = (...nums: Array<number>): number => {
  const gcd = (x: number, y: number) => (!y ? x : Math.gcd(y, x % y))

  return [...nums].reduce((a, b) => gcd(a, b))
}
