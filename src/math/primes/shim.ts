import primes from "./index.js";

declare global {
  interface Math {

    /**
     * Generates primes up to a given number, using the Sieve of Eratosthenes
     * @param num
     * @example
     * Math.primes(10); // [2, 3, 5, 7]
     */
    primes(num: number): number[];
  }
}

Math.primes = primes;
