import dateEquals from "../../date/equals/index.js";
import isDate from "../../date/isDate/index.js";
import isObject from "../isObject/index.js";
import ObjectKeys from "../keys/index.js";

/**
 * Performs a deep comparison between two values to determine if they are equivalent
 * @param obj
 * @param obj2
 * @example
 * equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' }); // true
 */
export default function equals(
  obj: Record<string, unknown>,
  obj2: unknown,
): boolean {
  if (obj === obj2) return true;

  if (isDate(obj)) return dateEquals(obj, obj2);

  if (!obj || !obj2 || !isObject(obj2)) return obj === obj2;

  if (obj.prototype !== obj2.prototype) return false;

  const keys = ObjectKeys(obj);

  if (keys.length !== ObjectKeys(obj2).length) return false;

  return keys.every((k) => equals(obj[k] as Record<string, unknown>, obj2[k]));
}
