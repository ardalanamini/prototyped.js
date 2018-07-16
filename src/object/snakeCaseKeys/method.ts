import * as snakeCase from "../../string/snakeCase/method";

const method = (obj: { [key: string]: any }): object => {
  return Object.keys(obj).reduce((acc: { [key: string]: any }, key) => {
    acc[snakeCase(key)] = obj[key];

    return acc;
  }, {});
};

export = method;
