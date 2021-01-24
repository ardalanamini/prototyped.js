import isEmpty from ".";
import { addPrototype } from "../../utils";

declare global {
  interface Object {
    $isEmpty(): boolean;
  }
}

/**
 * Checks if the object is empty
 * @memberof Object.prototype
 * @function $isEmpty
 * @returns {Boolean}
 * @example
 * ({ a: 1 }).$isEmpty(); // false
 * ({}).$isEmpty(); // true
 */
addPrototype(Object, "$isEmpty", isEmpty);
