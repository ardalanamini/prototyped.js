import forEach from "../forEach/method";
import keys from "../keys/method";

const method = <T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  fn: (value: T[K], key: K, object: T) => { [key: string]: any },
): Record<string, unknown> => {
  return keys(obj).reduce((prev: { [key: string]: any }, k) => {
    forEach(
      fn((obj as any)[k], k as K, obj),
      (value, key) => (prev[key] = value),
    );

    return prev;
  }, {});
};

export = method;
