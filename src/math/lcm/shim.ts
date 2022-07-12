import lcm from "./index.js";

declare global {
  interface Math {
    /**
     * Returns the least common multiple of two or more numbers
     * @param nums
     * @example
     * Math.lcm(12, 7); // 84
     * @example
     * Math.lcm(...[1, 3, 4, 5]); // 60
     */
    lcm(...nums: number[]): number;
  }
}

Math.lcm = lcm;
