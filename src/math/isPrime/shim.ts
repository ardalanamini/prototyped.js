import isPrime from "./index.js";

declare global {
  interface Math {
    /**
     * Checks if the provided integer is a prime number
     * @param num
     * @example
     * Math.isPrime(11); // true
     */
    isPrime(num: number): boolean;
  }
}

Math.isPrime = isPrime;
