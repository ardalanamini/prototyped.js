import flatten from ".";
import { addPrototype } from "../../utils";

declare global {
  interface Object {
    $flatten(): Record<string, unknown>;
  }
}

/**
 * Flattens the object into a single-depth object
 * @memberof Object.prototype
 * @function $flatten
 * @returns {Object}
 * @example
 * ({ foo: 1, bar: { foo: 2 } }).$flatten(); // { foo: 1, "bar.foo": 2 }
 */
addPrototype(Object, "$flatten", flatten);
