import * as method from "./method";

declare global {
  interface ArrayConstructor {
    repeat(n: number, value?: any): any[];
  }
}

/**
 * Initializes and fills an array with the specified value
 * @memberof Array
 * @function repeat
 * @param {Number} n
 * @param {*} [value=0]
 * @returns {Array}
 * @example
 * Array.repeat(5, 2); // [2,2,2,2,2]
 */
Array.repeat = method;
