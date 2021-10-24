import sum from "../../array/sum/index.js";

export default function average(...nums: number[]): number {
  return sum(nums) / nums.length;
}
