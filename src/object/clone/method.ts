import * as forEach from "../forEach/method";

const method = (obj: { [key: string]: any }, deep: boolean = false): object => {
  if (!deep) return Object.assign({}, obj);

  const clone: any = Object.assign({}, obj);

  forEach(clone, (value, key) => (clone[key] = typeof value === "object" ? method(value, true) : value));

  return Array.isArray(obj) ? (clone.length = obj.length) && Array.from(clone) : clone;
};

export = method;
