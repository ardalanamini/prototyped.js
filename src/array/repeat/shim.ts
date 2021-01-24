import repeat from ".";

declare global {
  interface ArrayConstructor {
    repeat<T = 0>(n: number, value?: T): T[];
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
Array.repeat = repeat;
