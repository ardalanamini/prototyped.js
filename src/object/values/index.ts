import { addPrototype } from "../../utils";
import * as method from "./method";

declare global {
  interface Object {
    $values(): any[];
  }
}

/**
 * Get values of the object
 * @memberof Object.prototype
 * @function $values
 * @returns {Object}
 * @example
 * ({ one: 1, two: 2, three: 3 }).$values(); // [1, 2, 3]
 */
addPrototype(Object, "$values", function(this: object) {
  return method(this);
});
