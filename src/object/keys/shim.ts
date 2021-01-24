import keys from ".";
import { addPrototype } from "../../utils";

declare global {
  interface Object {
    $keys(): string[];
  }
}

/**
 * Get keys of the object
 * @memberof Object.prototype
 * @function $keys
 * @returns {Object}
 * @example
 * ({ one: 1, two: 2, three: 3 }).$keys(); // ["one", "two", "three"]
 */
addPrototype(Object, "$keys", keys);
