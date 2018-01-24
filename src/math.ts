/**
 * @namespace Math
 */

export { }

declare global {
  interface Math {
    average(...nums: Array<number>): number
    avg(...nums: Array<number>): number
    factorial(n: number): number
    fibonacci(nth: number): Array<number>
    gcd(...nums: Array<number>): number
    lcm(...nums: Array<number>): number
    isEven(num: number): boolean
    isPrime(num: number): boolean
  }
}

if (!Math.average) {
  /**
   * Returns the average of an of two or more numbers
   * @param {number[]} nums
   * @returns {number}
   * @example
   * Math.average(...[1, 2, 3]); // 2
   * Math.average(1, 2, 3); // 2
   */
  Math.average = (...nums: Array<number>): number => [...nums].reduce((acc, val) => acc + val, 0) / nums.length
}

if (!Math.avg) {
  /**
   * An alias of Math.average
   * @param {number[]} nums
   * @returns {number}
   * @example
   * Math.avg(...[1, 2, 3]); // 2
   * Math.avg(1, 2, 3); // 2
   */
  Math.avg = Math.average
}

if (!Math.factorial) {
  /**
   * Calculates the factorial of a number
   * @param {number} num
   * @returns {number}
   * @example
   * Math.factorial(6); // 720
   */
  Math.factorial = (n: number): number => n <= 1 ? 1 : n * Math.factorial(n - 1)
}

if (!Math.fibonacci) {
  /**
   * Generates an array, containing the Fibonacci sequence, up until the nth term
   * @param {number} num
   * @returns {number[]}
   * @example
   * Math.fibonacci(6); // [0, 1, 1, 2, 3, 5]
   */
  Math.fibonacci = (nth: number): Array<number> => Array.from({ length: nth }).reduce(
    (acc: any, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  )
}

if (!Math.gcd) {
  /**
   * Calculates the greatest common divisor between two or more numbers
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
}

if (!Math.lcm) {
  /**
   * Returns the least common multiple of two or more numbers
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
}

if (!Math.isEven) {
  /**
   * Returns true if the given number is even, false otherwise
   * @param {number} num
   * @returns {boolean}
   * @example
   * Math.isEven(3); // false
   */
  Math.isEven = (num: number): boolean => num % 2 === 0
}

if (!Math.isPrime) {
  /**
   * Checks if the provided integer is a prime number
   * @param {number} num
   * @returns {boolean}
   * @example
   * Math.isPrime(11); // true
   */
  Math.isPrime = (num: number): boolean => {
    const boundary = Math.floor(Math.sqrt(num))

    for (var i = 2; i <= boundary; i++) if (num % i == 0) return false

    return num >= 2
  }
}
