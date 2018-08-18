import { addPrototype } from "../../utils";
import * as method from "./method";

declare global {
  interface Object {
    $assign(...sources: object[]): any;
  }
}

/**
 * Assigns object like Object.assign
 * @memberof Object.prototype
 * @function $assign
 * @param {...Object} sources
 * @returns {Object}
 * @example
 * ({ a: 0 }).$assign({ a: 1 }, { b: 2 }); // { a: 1, b: 2 }
 */
addPrototype(Object, "$assign", function(this: object, ...sources: object[]) {
  return method(this, ...sources);
});
