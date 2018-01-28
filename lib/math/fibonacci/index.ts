export { }

declare global {
  interface Math {
    fibonacci(nth: number): Array<number>
  }
}

/**
 * Generates an array, containing the Fibonacci sequence, up until the nth term
 * @memberof Math
 * @param {number} num
 * @returns {number[]}
 * @example
 * Math.fibonacci(6); // [0, 1, 1, 2, 3, 5]
 */
Math.fibonacci = (nth: number): Array<number> => Array.from({ length: nth }).reduce(
  (acc: any, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
  []
)
