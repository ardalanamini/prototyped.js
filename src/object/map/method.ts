import * as forEach from "../forEach/method";

const method = (obj: object, fn: (value: any, key: string | number, object: object) => object): object => {
  return Object.keys(obj).reduce((acc: { [key: string]: any }, k) => {
    forEach(fn((obj as { [key: string]: any })[k], k, obj), (value, key) => acc[key] = value);

    return acc;
  }, {});
};

export = method;
