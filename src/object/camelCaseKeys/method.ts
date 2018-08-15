import * as forEach from "../forEach/method";
import * as camelCase from "../../string/camelCase/method";

const method = (obj: object): object => {
  const result: { [key: string]: any } = {};

  forEach(obj, (value, key) => result[camelCase(key)] = value);

  return result;
};

export = method;
