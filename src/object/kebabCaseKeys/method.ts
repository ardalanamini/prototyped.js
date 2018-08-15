import * as forEach from "../forEach/method";
import * as kebabCase from "../../string/kebabCase/method";

const method = (obj: object): object => {
  const result: { [key: string]: any } = {};

  forEach(obj, (value, key) => result[kebabCase(key)] = value);

  return result;
};

export = method;
