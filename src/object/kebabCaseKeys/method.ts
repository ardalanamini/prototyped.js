import kebabCase from "../../string/kebabCase/method";
import forEach from "../forEach/method";

const method = (obj: Record<string, unknown>): Record<string, unknown> => {
  const result: { [key: string]: any } = {};

  forEach(obj, (value, key) => (result[kebabCase(key)] = value));

  return result;
};

export = method;
