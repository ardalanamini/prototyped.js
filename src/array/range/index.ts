import * as method from "./method";

declare global {
  interface ArrayConstructor {
    range(end: number, start?: number, step?: number): number[];
  }
}

/**
 * Initializes an array containing the numbers in the specified range where start
 * and end are inclusive with there common difference step
 * @memberof Array
 * @function range
 * @param {Number} end
 * @param {Number} [start=0]
 * @param {Number} [step=1]
 * @returns {Number[]}
 * @example
 * Array.range(5); // [0,1,2,3,4,5]
 * Array.range(7, 3); // [3,4,5,6,7]
 * Array.range(9, 0, 2); // [0,2,4,6,8]
 */
Array.range = method;
