export { }

declare global {
  interface Math {
    factorial(n: number): number
  }
}

/**
 * Calculates the factorial of a number
 * @memberof Math
 * @param {number} num
 * @returns {number}
 * @example
 * Math.factorial(6); // 720
 */
Math.factorial = (n: number): number => n <= 1 ? 1 : n * Math.factorial(n - 1)
