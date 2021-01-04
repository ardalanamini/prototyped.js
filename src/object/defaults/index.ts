import { addPrototype } from "../../utils";
import method from "./method";

declare global {
  interface Object {
    $defaults(...sources: Record<string, unknown>[]): Record<string, unknown>;
  }
}

/**
 * Assigns object in reverse by Object.assign
 * @memberof Object.prototype
 * @function $defaults
 * @param {...Object} sources
 * @returns {Object}
 * @example
 * ({ a: 0 }).$defaults({ a: 1, b: 2 }, { b: 3 }); // { a: 0, b: 2 }
 */
addPrototype(Object, "$defaults", method);
