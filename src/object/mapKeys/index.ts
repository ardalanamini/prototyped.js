import { addPrototype } from "../../utils";
import method from "./method";

declare global {
  interface Object {
    $mapKeys(
      fn: (value: any, key: string, object: Record<string, unknown>) => string,
    ): Record<string, unknown>;
  }
}

/**
 * Creates an object with keys generated by running the provided function for each key
 * and the same values as the provided object
 * @memberof Object.prototype
 * @function $mapKeys
 * @param {Function} fn
 * @returns {Object}
 * @example
 * ({ a: 1, b: 2 }).$mapKeys((val, key) => key + val); // { a1: 1, b2: 2 }
 */
addPrototype(Object, "$mapKeys", method);
