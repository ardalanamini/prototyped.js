import kebabCase from "../../string/kebabCase/method";
import forEach from "../forEach/method";

const method = (obj: object): object => {
  const result: { [key: string]: any } = {};

  forEach(obj, (value, key) => (result[kebabCase(key)] = value));

  return result;
};

export = method;
