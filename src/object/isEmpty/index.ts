import { addPrototype } from "../../utils";
import * as method from "./method";

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
addPrototype(Object, "$isEmpty", function(this: object) {
  return method(this);
});
