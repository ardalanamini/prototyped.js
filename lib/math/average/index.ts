export { }

declare global {
  interface Math {
    average(...nums: Array<number>): number
    avg(...nums: Array<number>): number
  }
}

/**
 * Returns the average of an of two or more numbers
 * @memberof Math
 * @param {number[]} nums
 * @returns {number}
 * @example
 * Math.average(...[1, 2, 3]); // 2
 * Math.average(1, 2, 3); // 2
 */
Math.average = (...nums: Array<number>): number => [...nums].reduce((prev, val) => prev + val, 0) / nums.length

/**
 * Returns the average of an of two or more numbers
 * @memberof Math
 * @param {number[]} nums
 * @returns {number}
 * @example
 * Math.avg(...[1, 2, 3]); // 2
 * Math.avg(1, 2, 3); // 2
 */
Math.avg = Math.average
