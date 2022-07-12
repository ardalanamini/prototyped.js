import size from "../size/index.js";

/**
 * Checks if the object is empty
 * @param obj
 * @example
 * isEmpty({ a: 1 }); // false
 * @example
 * isEmpty({}); // true
 */
export default function isEmpty(obj: Record<string, unknown>): boolean {
  return size(obj) === 0;
}
