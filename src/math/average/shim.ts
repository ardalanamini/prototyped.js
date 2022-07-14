import average from "./index.js";

declare global {
  interface Math {

    /**
     * Returns the average of an of two or more numbers
     * @alias avg
     * @param nums
     * @example
     * Math.average(...[1, 2, 3]); // 2
     * @example
     * Math.average(1, 2, 3); // 2
     */
    average(...nums: number[]): number;

    /**
     * Returns the average of an of two or more numbers
     * @alias average
     * @param nums
     * @example
     * Math.avg(...[1, 2, 3]); // 2
     * @example
     * Math.avg(1, 2, 3); // 2
     */
    avg(...nums: number[]): number;
  }
}

Math.average = Math.avg = average;
