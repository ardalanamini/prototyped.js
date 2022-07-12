import forEach from "../forEach/index.js";

/**
 * Just like array.reduce
 * @param obj
 * @param fn
 * @param [initialValue=undefined]
 * @example
 * reduce({foo: 1, bar: 2}, (prev, value, key) => [...prev, key + ":" + value], []); // ["foo:1", "bar:2"]
 */
export default function reduce<T extends Record<string, unknown>,
  K extends keyof T,
  P = unknown>(
  obj: T,
  fn: (prev: P, value: T[K], key: K, object: T) => P,
  initialValue: P = undefined as never,
): P {
  let reduced = initialValue;

  forEach<T, K>(
    obj,
    (value, key, object) => (reduced = fn(reduced, value, key, object)),
  );

  return reduced;
}
