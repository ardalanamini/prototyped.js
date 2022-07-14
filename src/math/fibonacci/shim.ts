import fibonacci from "./index.js";

declare global {
  interface Math {

    /**
     * Generates an array, containing the Fibonacci sequence, up until the nth term
     * @param nth
     * @example
     * Math.fibonacci(6); // [0, 1, 1, 2, 3, 5]
     */
    fibonacci(nth: number): number[];
  }
}

Math.fibonacci = fibonacci;
