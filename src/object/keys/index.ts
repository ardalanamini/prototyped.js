import * as method from "./method";
import { addPrototype } from "../utils";

declare global {
  interface Object {
    $keys(): string[];
  }
}

/**
 * Get keys of the object
 * @memberof Object.prototype
 * @returns {Object}
 * @example
 * { one: 1, two: 2, three: 3 }.$keys(); // ["one", "two", "three"]
 */
function $keys(this: object): string[] {
  return method(this);
}

addPrototype("$keys", $keys);
