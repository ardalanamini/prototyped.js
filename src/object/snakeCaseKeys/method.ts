import * as forEach from "../forEach/method";
import * as snakeCase from "../../string/snakeCase/method";

const method = (obj: object): object => {
  const result: { [key: string]: any } = {};

  forEach(obj, (value, key) => result[snakeCase(key)] = value);

  return result;
};

export = method;
