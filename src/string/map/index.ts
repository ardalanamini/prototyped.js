/**
 * Just like array.map
 * @param str
 * @param fn
 * @example
 * map('Hello', (char) => char == 'o' ? 'O' : char); // 'HellO'
 */
export default function map(
  str: string,
  fn: (char: string, index: number, chars: string[]) => string,
): string {
  return str.split("").map(fn)
    .join("");
}
