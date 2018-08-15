import * as forEach from "../forEach/method";

const method = (obj: object, fn: (value: any, key: string, object: object) => string): object => {
  const result: { [key: string]: any } = {};

  forEach(obj, (value, key, object) => result[fn(value, key, object)] = value);

  return result;
};

export = method;
