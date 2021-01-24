export default function initial<T extends unknown[]>(
  array: T,
): T extends [...infer F, unknown] ? F : T {
  return array.slice(0, -1) as never;
}
