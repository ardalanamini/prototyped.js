import repeat from "./index.js";

declare global {
  interface StringConstructor {

    /**
     * Initializes and fills an string with the specified value
     * @param n
     * @param [value=" "]
     * @example
     * String.repeat(5, "2"); // "22222"
     */
    repeat(n: number, value?: string): string;
  }
}

String.repeat = repeat;
