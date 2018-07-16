import * as isObject from "../isObject/method";
import * as isDate from "../../date/isDate/method";
import * as dateEquals from "../../date/equals/method";

const method = (obj: { [key: string]: any }, obj2: any): boolean => {
  if (obj === obj2) return true;

  if (isDate(obj)) return dateEquals(obj, obj2);

  if (!obj || !obj2 || !isObject(obj2)) return obj === obj2;

  if ((obj as any).prototype !== (obj2 as any).prototype) return false;

  const keys = Object.keys(obj);

  if (keys.length !== Object.keys(obj2).length) return false;

  return keys.every((k) => method(obj[k], (obj2 as any)[k]));
};

export = method;
