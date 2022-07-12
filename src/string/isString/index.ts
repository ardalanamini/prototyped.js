/**
 * Returns true if the given argument is an string
 * @param arg
 * @example
 * isString(2); // false
 * @example
 * isString("foo bar"); // true
 */
export default function isString(arg: unknown): arg is string {
  return typeof arg === "string";
}
