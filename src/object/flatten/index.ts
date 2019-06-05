import { addPrototype } from "../../utils";
import method from "./method";

declare global {
  interface Object {
    $flatten(): object;
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
addPrototype(Object, "$flatten", method);
