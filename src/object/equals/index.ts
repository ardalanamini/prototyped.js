import dateEquals from "../../date/equals";
import isDate from "../../date/isDate";
import isObject from "../isObject";
import ObjectKeys from "../keys";

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
