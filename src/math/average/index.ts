import sum from "../../array/sum";

export default function average(...nums: number[]): number {
  return sum(nums) / nums.length;
}
