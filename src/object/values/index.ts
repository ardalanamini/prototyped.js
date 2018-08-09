import * as method from "./method";
import { addPrototype } from "../utils";

declare global {
  interface Object {
    $values(): number;
  }
}

/**
 * Get values of the object
 * @memberof Object.prototype
 * @returns {Object}
 * @example
 * { one: 1, two: 2, three: 3 }.$values(); // [1, 2, 3]
 */
function $values(this: object): string[] {
  return method(this);
}

addPrototype("$values", $values);
