export { }

declare global {
  interface Math {
    isPrime(num: number): boolean
  }
}

/**
 * Checks if the provided integer is a prime number
 * @memberof Math
 * @param {number} num
 * @returns {boolean}
 * @example
 * Math.isPrime(11); // true
 */
Math.isPrime = (num: number): boolean => {
  const boundary = Math.floor(Math.sqrt(num))

  for (let i = 2; i <= boundary; i++) if (num % i == 0) return false

  return num >= 2
}
