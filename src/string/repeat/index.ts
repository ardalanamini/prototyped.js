import arrayRepeat from "../../array/repeat/index.js";

/**
 * Initializes and fills an string with the specified value
 * @param n
 * @param [value=" "]
 * @example
 * repeat(5, "2"); // "22222"
 */
export default function repeat(n: number, value = " "): string {
  return arrayRepeat(n, value).join("");
}
