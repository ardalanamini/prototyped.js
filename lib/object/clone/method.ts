import * as isObject from "../isInstance/method";

const method = (obj: { [key: string]: any }, deep: boolean = false): object => {
  if (!deep) return { ...obj };

  const clone: any = { ...obj };

  Object.keys(clone).forEach(
    (key) => (clone[key] = isObject(obj[key]) ? method(obj[key], true) : obj[key]),
  );

  return Array.isArray(obj) ? (clone.length = obj.length) && Array.from(clone) : clone;
};

export = method;
