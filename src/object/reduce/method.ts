import forEach from "../forEach/method";

const method = <T extends object, K extends keyof T, P = any>(
  obj: T,
  fn: (prev: P, value: T[K], key: K, object: T) => any,
  initialValue: P = undefined as any,
) => {
  let reduced = initialValue;

  forEach<T, K>(
    obj,
    (value, key, object) => (reduced = fn(reduced, value, key, object)),
  );

  return reduced;
};

export = method;
