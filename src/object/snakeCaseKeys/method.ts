import snakeCase from "../../string/snakeCase/method";
import forEach from "../forEach/method";

const method = (obj: object): object => {
  const result: { [key: string]: any } = {};

  forEach(obj, (value, key) => (result[snakeCase(key)] = value));

  return result;
};

export = method;
