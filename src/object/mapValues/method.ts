import * as forEach from "../forEach/method";

const method = (obj: object, fn: (value: any, key: string, object: object) => any): object => {
  const result: { [key: string]: any } = {};

  forEach(obj, (value, key, object) => result[key] = fn(value, key, object));

  return result;
};

export = method;
