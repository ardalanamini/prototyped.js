/**
 * Returns true if the given argument is a boolean
 * @param arg
 * @example
 * isBoolean('foo bar'); // false
 * @example
 * isBoolean(false); // true
 */
export default function isBoolean(arg: unknown): arg is boolean {
  return typeof arg === "boolean";
}
