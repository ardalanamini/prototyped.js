import * as method from "./method";

declare global {
  interface Object {
    $empty(): void;
  }
}

/**
 * Empty the object
 * @memberof Object
 * @example
 * const obj = { a: 1 };
 * obj.$empty();
 * // obj = {};
 */
Object.prototype.$empty = function() {
  return method(this);
};
