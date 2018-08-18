import { addPrototype } from "../../utils";
import * as method from "./method";

declare global {
  interface Object {
    $forEach(fn: (value: any, key: string, object: object) => void): void;
  }
}

/**
 * Iterates the object by keys
 * @memberof Object.prototype
 * @function $forEach
 * @param {Function} fn
 * @example
 * const users = {
 *   fred: { user: "fred", age: 40 },
 *   pebbles: { user: "pebbles", age: 1 }
 * };
 * users.$forEach(u => console.log(u.age)); // console logs 40 and 1
 */
addPrototype(Object, "$forEach", function(this: object, fn: (value: any, key: string, object: object) => void) {
  return method(this, fn);
});
