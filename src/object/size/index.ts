import * as method from "./method";

declare global {
  interface Object {
    $size(): number;
  }
}

/**
 * Get size of the object
 * @memberof Object
 * @returns {Object}
 * @example
 * { one: 1, two: 2, three: 3 }.$size(); // 3
 */
Object.prototype.$size = function() {
  return method(this);
};
