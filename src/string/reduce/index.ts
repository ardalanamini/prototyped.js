export default function reduce<T = any>(
  str: string,
  fn: (prev: T, char: string, index: number, chars: string[]) => T,
  initialValue: T = undefined as never,
): T {
  return str.split("").reduce(fn, initialValue);
}
