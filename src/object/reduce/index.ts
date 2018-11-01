import { addPrototype } from "../../utils";
import * as method from "./method";

declare global {
  interface Object {
    $reduce<T = any>(fn: (prev: T, value: any, key: string, object: object) => T, initialValue?: T): any;
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
addPrototype(Object, "$reduce", method);
