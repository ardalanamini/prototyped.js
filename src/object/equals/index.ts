import * as method from "./method";

declare global {
  interface Object {
    $equals(obj: any): boolean;
  }
}

/**
 * Performs a deep comparison between two values to determine if they are equivalent
 * @memberof Object
 * @param {*} obj
 * @returns {Boolean}
 * @example
 * ({ a: [2, { e: 3 }], b: [4], c: 'foo' }).$equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }); // true
 */
Object.prototype.$equals = function(obj) {
  return method(this, obj);
};
