/**
 * Checks if the string is equal to the given value
 * @param str
 * @param value
 * @example
 * equals("hello", "Hello"); // false
 */
export default function equals(str: string, value: unknown): boolean {
  return str === value;
}
