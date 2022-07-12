import keys from "../keys/index.js";

/**
 * Omits the key-value pairs corresponding to the given keys from an object; or
 * Creates an object composed of the properties the given function returns falsey for.
 * The function is invoked with two arguments: (value, key)
 * @param obj
 * @param arr
 * @example
 * omit({ a: 1, b: '2', c: 3 }, ['b']); // { a: 1, c: 3 }
 * @example
 * omit({ a: 1, b: '2', c: 3 }, (x) => typeof x === 'number'); // { b: '2' }
 */
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
