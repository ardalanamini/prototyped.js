import { addPrototype } from "../../utils";
import * as method from "./method";

declare global {
  interface Object {
    $clone(deep?: boolean): object;
  }
}

/**
 * Creates a (deep) clone of the object
 * @memberof Object.prototype
 * @function $clone
 * @param {Boolean} [deep=false]
 * @returns {Object}
 * @example
 * const a = { foo: 'bar', obj: { a: 1, b: 2 } };
 * const b = a.$clone(true); // a !== b, a.obj !== b.obj
 */
addPrototype(Object, "$clone", function(this: object, deep?: boolean) {
  return method(this, deep);
});
