import keys from "../keys/index.js";

/**
 * Iterates the object by keys
 * @param obj
 * @param fn
 * @example
 * const users = {
 *   fred: { user: "fred", age: 40 },
 *   pebbles: { user: "pebbles", age: 1 }
 * };
 * forEach(users, u => console.log(u.age)); // console logs 40 and 1
 */
export default function forEach<
  T extends Record<string, unknown>,
  K extends keyof T,
>(obj: T, fn: (value: T[K], key: K, object: T) => void): void {
  return keys(obj).forEach((key) => fn(obj[key] as never, key as K, obj));
}
