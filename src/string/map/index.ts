export default function map(
  str: string,
  fn: (char: string, index: number, chars: string[]) => string,
): string {
  return str.split("").map(fn).join("");
}
