
import * as method from "./method";

declare global {
  interface Object {
    $reduce<T = any>(fn: (prev: T, value: any, key: string, object: object) => T, initialValue?: T): any;
  }
}

/**
 * Just like array.reduce
 * @memberof Object
 * @param {Function} fn
 * @param {*} initialValue
 * @returns {*}
 * @example
 * ({foo: 1, bar: 2}).$reduce((prev, value, key) => [...prev, key + ":" + value], []);
 * // ["foo:1", "bar:2"]
 */
Object.prototype.$reduce = function(fn, initialValue) {
  return method(this, fn, initialValue);
};
