import range from "./index.js";

declare global {
  interface ArrayConstructor {

    /**
     * Initializes an array containing the numbers in the specified range where start
     * and end are inclusive with there common difference step
     * @param end
     * @param [start=0]
     * @param [step=1]
     * @example
     * Array.range(5); // [0,1,2,3,4,5]
     * @example
     * Array.range(7, 3); // [3,4,5,6,7]
     * @example
     * Array.range(9, 0, 2); // [0,2,4,6,8]
     */
    range(end: number, start?: number, step?: number): number[];
  }
}

Array.range = range;
