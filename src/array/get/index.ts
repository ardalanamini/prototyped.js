export default function get<T extends unknown[], I extends number, F = null>(
  array: T,
  index: I,
  fallback: F = null as never,
): T[I] | F {
  return index >= array.length ? fallback : array[index];
}
