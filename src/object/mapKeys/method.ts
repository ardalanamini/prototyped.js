import forEach from "../forEach/method";

const method = <T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  fn: (value: T[K], key: K, object: T) => string,
): Record<string, unknown> => {
  const result: { [key: string]: any } = {};

  forEach<T, K>(
    obj,
    (value, key, object) => (result[fn(value, key, object)] = value),
  );

  return result;
};

export = method;
