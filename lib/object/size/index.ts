import * as method from "./method";
import { addPrototype } from "../utils";

declare global {
  interface Object {
    $size(): number;
  }
}

/**
 * Get size of the object
 * @memberof Object.prototype
 * @returns {Object}
 * @example
 * { one: 1, two: 2, three: 3 }.$size(); // 3
 */
function $size(this: object): number {
  return method(this);
}

addPrototype("$size", $size);
