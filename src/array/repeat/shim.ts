import repeat from "./index.js";

declare global {
  interface ArrayConstructor {
    /**
     * Initializes and fills an array with the specified value
     * @param n
     * @param [value=0]
     * @example
     * Array.repeat(5, 2); // [2,2,2,2,2]
     */
    repeat<T = 0>(n: number, value?: T): T[];
  }
}

Array.repeat = repeat;
