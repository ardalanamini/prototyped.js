import range from "../../array/range/index.js";

/**
 * Generates primes up to a given number, using the Sieve of Eratosthenes
 * @param num
 * @example
 * primes(10); // [2, 3, 5, 7]
 */
export default function primes(num: number): number[] {
  let arr = range(num, 2);

  range(Math.floor(Math.sqrt(num)), 2).forEach(
    (x) => (arr = arr.filter((y) => y % x !== 0 || y === x)),
  );

  return arr;
}
