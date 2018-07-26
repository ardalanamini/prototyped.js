import * as method from "./method";
import { addPrototype } from "../utils";

declare global {
  interface Object {
    $assign(...sources: object[]): any;
  }
}

/**
 * Assigns object like Object.assign
 * @memberof Object.prototype
 * @param {Object[]} sources
 * @returns {Object}
 * @example
 * { a: 0 }.$assign({ a: 1 }, { b: 2 }); // { a: 1, b: 2 }
 */
function $assign(this: object, ...sources: object[]): object {
  return method(this, ...sources);
}

addPrototype("$assign", $assign);
