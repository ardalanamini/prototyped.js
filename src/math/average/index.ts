import sum from "../../array/sum/index.js";

/**
 * Returns the average of an of two or more numbers
 * @param nums
 * @example
 * average(...[1, 2, 3]); // 2
 * @example
 * average(1, 2, 3); // 2
 */
export default function average(...nums: number[]): number {
  return sum(nums) / nums.length;
}
