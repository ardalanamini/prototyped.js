export default function forEach(
  str: string,
  fn: (char: string, index: number, chars: string[]) => void,
): void {
  return str.split("").forEach(fn);
}
