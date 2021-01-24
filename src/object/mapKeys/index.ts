import forEach from "../forEach";

export default function mapKeys<
  T extends Record<string, unknown>,
  K extends keyof T
>(
  obj: T,
  fn: (value: T[K], key: K, object: T) => string,
): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  forEach<T, K>(
    obj,
    (value, key, object) => (result[fn(value, key, object)] = value),
  );

  return result;
}
