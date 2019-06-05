import forEach from "../forEach/method";
import keys from "../keys/method";

const method = <T extends object, K extends keyof T>(
  obj: T,
  fn: (value: T[K], key: K, object: T) => { [key: string]: any },
): object => {
  return keys(obj).reduce((prev: { [key: string]: any }, k) => {
    forEach(
      fn((obj as any)[k], k as K, obj),
      (value, key) => (prev[key] = value),
    );

    return prev;
    // tslint:disable-next-line: align
  }, {});
};

export = method;
