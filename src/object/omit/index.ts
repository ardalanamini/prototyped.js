import keys from "../keys";

export default function omit(
  obj: Record<string, unknown>,
  arr:
    | string[]
    | ((
        value: unknown,
        key: string,
        object: Record<string, unknown>,
      ) => unknown),
): Record<string, unknown> {
  let fn = arr as (
    value: unknown,
    key: string,
    object: Record<string, unknown>,
  ) => unknown;

  if (Array.isArray(arr)) fn = (v, k) => arr.indexOf(k) !== -1;

  return keys(obj)
    .filter((k) => !fn(obj[k], k, obj))
    .reduce(
      (acc, key) => ((acc[key] = obj[key]), acc),
      {} as Record<string, unknown>,
    );
}
