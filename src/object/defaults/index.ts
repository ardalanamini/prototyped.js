import * as method from "./method";
import { addPrototype } from "../utils";

declare global {
  interface Object {
    $defaults(...sources: object[]): any;
  }
}

/**
 * Assigns object in reverse by Object.assign
 * @memberof Object.prototype
 * @param {Object[]} sources
 * @returns {Object}
 * @example
 * { a: 0 }.$defaults({ a: 1, b: 2 }, { b: 3 }); // { a: 0, b: 2 }
 */
function $defaults(this: object, ...sources: object[]): object {
  return method(this, ...sources);
}

addPrototype("$defaults", $defaults);
