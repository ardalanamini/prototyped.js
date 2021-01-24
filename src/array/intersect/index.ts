export default function intersect<T>(arr: T[], array: unknown[]): T[] {
  const set = new Set(array);

  return arr.filter((item) => set.has(item));
}
