import keys from "../keys/index.js";

export default function forEach<
  T extends Record<string, unknown>,
  K extends keyof T,
>(obj: T, fn: (value: T[K], key: K, object: T) => void): void {
  return keys(obj).forEach((key) => fn(obj[key] as never, key as K, obj));
}
