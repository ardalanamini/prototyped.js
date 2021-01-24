export default function union<T extends unknown[], P extends unknown[]>(
  arr: T,
  array: P,
): [...T, ...P] {
  return Array.from(new Set([...arr, ...array])) as never;
}
