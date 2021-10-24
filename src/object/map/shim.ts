import { addPrototype } from "../../utils.js";
import map from "./index.js";

declare global {
  interface Object {
    $map(
      fn: (
        value: unknown,
        key: string,
        object: Record<string, unknown>,
      ) => Record<string, unknown>,
    ): Record<string, unknown>;
  }
}

/**
 * Creates an object with keys and values
 * generated by running the provided function for each value
 * @memberof Object.prototype
 * @function $map
 * @param {Function} fn
 * @returns {Object}
 * @example
 * const users = {
 *   fred: { user: "fred", age: 40 },
 *   pebbles: { user: "pebbles", age: 1 }
 * };
 * users.$map(u => u.age); // { fred: 40, pebbles: 1 }
 */
addPrototype(Object, "$map", map);
