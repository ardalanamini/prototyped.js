import forEach from "../forEach/method";

const method = <T extends object, K extends keyof T>(
  obj: T,
  fn: (value: T[K], key: K, object: T) => any,
): object => {
  const result: any = {};

  forEach<T, K>(
    obj,
    (value, key, object) => (result[key] = fn(value, key, object)),
  );

  return result;
};

export = method;
