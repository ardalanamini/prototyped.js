import * as forEach from "../forEach/method";

const method = (obj: object): object => {
  const result: { [key: string]: any } = {};

  forEach(obj, (value, key) => result[key.toLowerCase()] = value);

  return result;
};

export = method;
