import * as method from "./method";
import { addPrototype } from "../utils";

declare global {
  interface Object {
    $invert(): object;
  }
}

/**
 * Inverts the key-value pairs of the object, without mutating it
 * @memberof Object.prototype
 * @returns {Object}
 * @example
 * { name: "John", age: 20 }.$invert(); // { 20: "age", John: "name" }
 */
function $invert(this: object): object {
  return method(this);
}

addPrototype($invert);
