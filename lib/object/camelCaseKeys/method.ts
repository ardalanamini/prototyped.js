import * as camelCase from "../../string/camelCase/method";

const method = (obj: { [key: string]: any }): object => {
  return Object.keys(obj).reduce((acc: { [key: string]: any }, key) => {
    acc[camelCase(key)] = obj[key];

    return acc;
  }, {});
};

export = method;
