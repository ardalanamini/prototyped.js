/**
 * Returns an array of the string's character
 * @example
 * chars("Hello"); // ["H", "e", "l", "l", "o"]
 */
export default function chars(str: string): string[] {
  return str.split("");
}
