/**
 * Just like array.forEach
 * @param str
 * @param fn
 * @example
 * forEach('Hello', (char, index) => char == 'o' && consol.log(index)); // console logs 4
 */
export default function forEach(
  str: string,
  fn: (char: string, index: number, chars: string[]) => void,
): void {
  str.split("").forEach(fn);
}
