import * as method from "./method";

declare global {
  interface Object {
    $isEmpty(): boolean;
  }
}

/**
 * Checks if the object is empty
 * @memberof Object
 * @returns {Boolean}
 * @example
 * ({ a: 1 }).$isEmpty(); // false
 * ({}).$isEmpty(); // true
 */
Object.prototype.$isEmpty = function() {
  return method(this);
};
