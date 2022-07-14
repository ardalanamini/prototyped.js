import objectKeys from "../keys/index.js";

/**
 * Empty the object
 * @param obj
 * @example
 * const obj = { a: 1 };
 * empty(obj);
 * // obj = {};
 */
export default function empty(obj: Record<string, unknown>): void {
  const keys = objectKeys(obj);

  for (const key of keys) delete obj[key];
}
