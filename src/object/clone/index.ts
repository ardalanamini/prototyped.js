import * as method from "./method";

declare global {
  interface Object {
    $clone(deep?: boolean): object;
  }
}

/**
 * Creates a (deep) clone of the object
 * @memberof Object
 * @param {Boolean} [deep=false]
 * @returns {Object}
 * @example
 * const a = { foo: 'bar', obj: { a: 1, b: 2 } };
 * const b = a.$clone(true); // a !== b, a.obj !== b.obj
 */
Object.prototype.$clone = function(deep) {
  return method(this, deep);
};
