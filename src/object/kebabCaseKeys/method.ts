import * as kebabCase from "../../string/kebabCase/method";

const method = (obj: { [key: string]: any }): object => {
  return Object.keys(obj).reduce((acc: { [key: string]: any }, key) => {
    acc[kebabCase(key)] = obj[key];

    return acc;
  }, {});
};

export = method;
