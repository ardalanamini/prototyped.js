import forEach from "../forEach";
import keys from "../keys";

export default function map<
  T extends Record<string, unknown>,
  K extends keyof T
>(
  obj: T,
  fn: (value: T[K], key: K, object: T) => Record<string, unknown>,
): Record<string, unknown> {
  return keys(obj).reduce((prev, k) => {
    forEach(
      fn(obj[k] as never, k as K, obj),
      (value, key) => (prev[key] = value),
    );

    return prev;
  }, {} as Record<string, unknown>);
}
