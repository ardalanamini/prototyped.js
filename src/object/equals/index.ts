import * as method from "./method";
import { addPrototype } from "../utils";

declare global {
  interface Object {
    $equals(obj: any): boolean;
  }
}

/**
 * Performs a deep comparison between two values to determine if they are equivalent
 * @memberof Object.prototype
 * @param {*} obj
 * @returns {boolean}
 * @example
 * { a: [2, { e: 3 }], b: [4], c: 'foo' }.$equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }); // true
 */
function $equals(this: object, obj: any): boolean {
  return method(this, obj);
}

addPrototype("$equals", $equals);
