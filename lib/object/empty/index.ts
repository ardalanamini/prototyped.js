import * as method from "./method";
import { addPrototype } from "../utils";

declare global {
  interface Object {
    $empty(): boolean;
  }
}

/**
 * Checks if the object is empty
 * @memberof Object.prototype
 * @returns {boolean}
 * @example
 * { a: 1 }.$empty(); // false
 * {}.$empty(); // true
 */
function $empty(this: object): boolean {
  return method(this);
}

addPrototype("$empty", $empty);
