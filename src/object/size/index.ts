import { addPrototype } from "../../utils";
import method from "./method";

declare global {
  interface Object {
    $size(): number;
  }
}

/**
 * Get size of the object
 * @memberof Object.prototype
 * @function $size
 * @returns {Object}
 * @example
 * { one: 1, two: 2, three: 3 }.$size(); // 3
 */
addPrototype(Object, "$size", method);
