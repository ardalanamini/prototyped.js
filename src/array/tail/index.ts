export default function tail<T extends unknown[]>(
  arr: T,
): T extends [unknown, ...infer F] ? F : T {
  return arr.length > 1 ? (arr.slice(1) as never) : ([] as never);
}
