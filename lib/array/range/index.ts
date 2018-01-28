export { }

declare global {
  interface ArrayConstructor {
    range(end: number, start?: number, step?: number): Array<number>
  }
}

/**
 * Initializes an array containing the numbers in the specified range where start and end are inclusive with there common difference step
 * @memberof Array
 * @param {number} end
 * @param {number} [start=0]
 * @param {number} [step=1]
 * @returns {number[]}
 * @example
 * Array.range(5); // [0,1,2,3,4,5]
 * Array.range(7, 3); // [3,4,5,6,7]
 * Array.range(9, 0, 2); // [0,2,4,6,8]
 */
Array.range = (end: number, start = 0, step = 1): Array<number> => Array.from({ length: Math.ceil((end + 1 - start) / step) }).map((v, i) => i * step + start)
