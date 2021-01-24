export default function any<T>(
  array: T[],
  fn: (value: T, index: number, array: T[]) => boolean = Boolean,
): boolean {
  return array.some(fn);
}
