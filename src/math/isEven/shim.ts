import isEven from "./index.js";

declare global {
  interface Math {

    /**
     * Returns true if the given number is even, false otherwise
     * @param num
     * @example
     * Math.isEven(3); // false
     */
    isEven(num: number): boolean;
  }
}

Math.isEven = isEven;
