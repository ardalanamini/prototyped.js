import snakeCase from "../../string/snakeCase/method";
import forEach from "../forEach/method";

const method = (obj: Record<string, unknown>): Record<string, unknown> => {
  const result: { [key: string]: any } = {};

  forEach(obj, (value, key) => (result[snakeCase(key)] = value));

  return result;
};

export = method;
