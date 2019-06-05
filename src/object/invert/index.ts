import { addPrototype } from "../../utils";
import method from "./method";

declare global {
  interface Object {
    $invert(): object;
  }
}

/**
 * Inverts the key-value pairs of the object, without mutating it
 * @memberof Object.prototype
 * @function $invert
 * @returns {Object}
 * @example
 * ({ name: "John", age: 20 }).$invert(); // { 20: "age", John: "name" }
 */
addPrototype(Object, "$invert", method);
