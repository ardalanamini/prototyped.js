import gcd from "./index.js";

declare global {
  interface Math {
    /**
     * Calculates the greatest common divisor between two or more numbers
     * @param nums
     * @example
     * Math.gcd(8, 36); // 4
     * @example
     * Math.gcd(...[12, 8, 32]); // 4
     */
    gcd(...nums: number[]): number;
  }
}

Math.gcd = gcd;
