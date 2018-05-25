import * as isObject from "../isInstance/method";

const method = (obj: { [key: string]: any }, obj2: any): boolean => {
  if (obj === obj2) return true;

  if (obj instanceof Date && obj2 instanceof Date) return obj.getTime() === obj2.getTime();

  if (!obj || !obj2 || (!isObject(obj) && !isObject(obj2))) return obj === obj2;

  if (obj === null || obj === undefined || obj2 === null || obj2 === undefined) return false;

  if ((obj as any).prototype !== obj2.prototype) return false;

  const keys = Object.keys(obj);

  if (keys.length !== Object.keys(obj2).length) return false;

  return keys.every((k) => method((obj as any)[k], obj2[k]));
};

export = method;
