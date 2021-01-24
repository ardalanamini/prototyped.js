export default function all<T>(
  array: T[],
  fn: (value: T, index: number, array: T[]) => boolean = Boolean,
): boolean {
  return array.every(fn);
}
