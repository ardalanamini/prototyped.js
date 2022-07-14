import keys from "../keys/index.js";

/**
 * Inverts the key-value pairs of the object, without mutating it
 * @param obj
 * @example
 * invert({ name: "John", age: 20 }); // { 20: "age", John: "name" }
 */
export default function invert(obj: Record<string, unknown>): Record<string, unknown> {
  return keys(obj).reduce<Record<string, unknown>>((acc, key) => {
    acc[obj[key] as string] = key;

    return acc;
  }, {});
}
