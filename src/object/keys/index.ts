import * as method from "./method";

declare global {
  interface Object {
    $keys(): string[];
  }
}

/**
 * Get keys of the object
 * @memberof Object
 * @returns {Object}
 * @example
 * ({ one: 1, two: 2, three: 3 }).$keys(); // ["one", "two", "three"]
 */
Object.prototype.$keys = function() {
  return method(this);
};
