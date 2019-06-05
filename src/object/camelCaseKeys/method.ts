import camelCase from "../../string/camelCase/method";
import forEach from "../forEach/method";

const method = (obj: object): object => {
  const result: { [key: string]: any } = {};

  forEach(obj, (value, key) => (result[camelCase(key)] = value));

  return result;
};

export = method;
