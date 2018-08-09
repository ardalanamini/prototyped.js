import * as method from "./method";
import { addPrototype } from "../utils";

declare global {
  interface Object {
    $forEach(fn: (value: any, key: string | number, object: object) => void): void;
  }
}

/**
 * Iterates the object by keys
 * @memberof Object.prototype
 * @param {Function} fn
 * @example
 * const users = {
 *   fred: { user: "fred", age: 40 },
 *   pebbles: { user: "pebbles", age: 1 }
 * };
 * users.$forEach(u => console.log(u.age)); // console logs 40 and 1
 */
function $forEach(this: object, fn: (value: any, key: string | number, object: object) => void) {
  return method(this, fn);
}

addPrototype("$forEach", $forEach);
