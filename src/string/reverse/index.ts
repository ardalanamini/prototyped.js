/**
 * Reverses the string
 * @param str
 * @example
 * reverse("foobar"); // "raboof"
 */
export default function reverse(str: string): string {
  return [...str].reverse().join("");
}
