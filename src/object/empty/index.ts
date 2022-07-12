import ObjectKeys from "../keys/index.js";

/**
 * Empty the object
 * @param obj
 * @example
 * const obj = { a: 1 };
 * empty(obj);
 * // obj = {};
 */
export default function empty(obj: Record<string, unknown>): void {
  const keys = ObjectKeys(obj);

  for (let i = 0; i < keys.length; i++) {
    delete obj[keys[i]];
  }
}
