import forEach from "../forEach/index.js";

export default function mapValues<T extends Record<string, unknown>,
  K extends keyof T,
>(
  obj: T,
  fn: (value: T[K], key: K, object: T) => unknown,
): Record<string, unknown> {
  const result = {} as Record<K, unknown>;

  forEach<T, K>(
    obj,
    (value, key, object) => (result[key] = fn(value, key, object)),
  );

  return result;
}
