import * as method from "./method";

declare global {
  interface Object {
    $assign(...sources: object[]): any;
  }
}

/**
 * Assigns object like Object.assign
 * @memberof Object
 * @param {...Object} sources
 * @returns {Object}
 * @example
 * ({ a: 0 }).$assign({ a: 1 }, { b: 2 }); // { a: 1, b: 2 }
 */
Object.prototype.$assign = function(...sources) {
  return method(this, ...sources);
};
