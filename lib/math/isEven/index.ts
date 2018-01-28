export { }

declare global {
  interface Math {
    isEven(num: number): boolean
    isPrime(num: number): boolean
  }
}

/**
 * Returns true if the given number is even, false otherwise
 * @memberof Math
 * @param {number} num
 * @returns {boolean}
 * @example
 * Math.isEven(3); // false
 */
Math.isEven = (num: number): boolean => num % 2 === 0
