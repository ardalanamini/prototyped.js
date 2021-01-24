import reduce from ".";
import { addPrototype } from "../../utils";

declare global {
  interface Object {
    $reduce<T = any>(
      fn: (
        prev: T,
        value: unknown,
        key: string,
        object: Record<string, unknown>,
      ) => T,
      initialValue?: T,
    ): T;
  }
}

/**
 * Just like array.reduce
 * @memberof Object.prototype
 * @function $reduce
 * @param {Function} fn
 * @param {*} initialValue
 * @returns {*}
 * @example
 * ({foo: 1, bar: 2}).$reduce((prev, value, key) => [...prev, key + ":" + value], []);
 * // ["foo:1", "bar:2"]
 */
addPrototype(Object, "$reduce", reduce);
