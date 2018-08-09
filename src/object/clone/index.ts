import * as method from "./method";
import { addPrototype } from "../utils";

declare global {
  interface Object {
    $clone(deep?: boolean): object;
  }
}

/**
 * Creates a (deep) clone of the object
 * @memberof Object.prototype
 * @param {Boolean} deep
 * @returns {Object}
 * @example
 * const a = { foo: 'bar', obj: { a: 1, b: 2 } };
 * const b = a.$clone(true); // a !== b, a.obj !== b.obj
 */
function $clone(this: object, deep?: boolean): object {
  return method(this, deep);
}

addPrototype("$clone", $clone);
