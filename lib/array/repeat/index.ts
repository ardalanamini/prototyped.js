export { }

declare global {
  interface ArrayConstructor {
    repeat(n: number, value?: any): Array<any>
  }
}

/**
 * Initializes and fills an array with the specified value
 * @memberof Array
 * @param {number} n
 * @param {*} [value=0]
 * @returns {Array}
 * @example
 * Array.repeat(5, 2); // [2,2,2,2,2]
 */
Array.repeat = (n: number, value = 0): Array<any> => Array(n).fill(value)
