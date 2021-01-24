export default function last<T extends unknown[]>(
  array: T,
): T extends [...infer I, infer L] ? L : T extends Array<infer P> ? P : never {
  return array[array.length - 1] as never;
}
