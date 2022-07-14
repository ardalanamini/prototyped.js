import factorial from "./index.js";

declare global {
  interface Math {

    /**
     * Calculates the factorial of a number
     * @param n
     * @example
     * Math.factorial(6); // 720
     */
    factorial(n: number): number;
  }
}

Math.factorial = factorial;
