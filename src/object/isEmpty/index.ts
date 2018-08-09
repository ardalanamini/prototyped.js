import * as method from "./method";
import { addPrototype } from "../utils";

declare global {
  interface Object {
    $isEmpty(): boolean;
  }
}

/**
 * Checks if the object is empty
 * @memberof Object.prototype
 * @returns {Boolean}
 * @example
 * { a: 1 }.$isEmpty(); // false
 * {}.$isEmpty(); // true
 */
function $isEmpty(this: object): boolean {
  return method(this);
}

addPrototype("$isEmpty", $isEmpty);
