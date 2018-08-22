import * as forEach from "../forEach/method";

const method = (obj: object, fn: (value: any, key: string, object: object) => { [key: string]: any }): object => {
  return Object.keys(obj).reduce((prev: { [key: string]: any }, k) => {
    forEach(fn((obj as { [key: string]: any })[k], k, obj), (value, key) => prev[key] = value);

    return prev;
  }, {});
};

export = method;
