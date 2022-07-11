/**
 * Returns true if the given argument is a number
 * @param arg
 * @example
 * isNumber('foo bar'); // false
 * @example
 * isNumber(2); // true
 */
export default function isNumber(arg: unknown): arg is number {
  return typeof arg === "number" || arg instanceof Number;
}
