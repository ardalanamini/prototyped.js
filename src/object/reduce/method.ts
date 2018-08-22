import * as forEach from "../forEach/method";

const method = (
  obj: object,
  fn: (prev: any, value: any, key: string, object: object) => any,
  initialValue: any = undefined
) => {
  let reduced = initialValue;

  forEach(obj, (value, key, object) => reduced = fn(reduced, value, key, object));

  return reduced;
};

export = method;
