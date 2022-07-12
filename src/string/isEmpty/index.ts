/**
 * Checks if the string is empty
 * @param str
 * @example
 * isEmpty("123"); // false
 * @example
 * isEmpty(""); // true
 */
export default function isEmpty(str: string): boolean {
  return str.length === 0;
}
