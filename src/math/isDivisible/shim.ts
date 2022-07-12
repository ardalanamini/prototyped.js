import isDivisible from "./index.js";

declare global {
  interface Math {
    /**
     * Checks if the first numeric argument is divisible by the second one
     * @param dividend
     * @param divisor
     * @example
     * Math.isDivisible(6, 3); // true
     */
    isDivisible(dividend: number, divisor: number): boolean;
  }
}

Math.isDivisible = isDivisible;
