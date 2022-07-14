/**
 * Returns the last item of the array
 * @example
 * last([1, 2, 3]); // 3
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function last<T extends unknown[]>(array: T): T extends [...infer I, infer L]
  ? L : T extends Array<infer P> ? P : never {
  return array[array.length - 1] as never;
}
