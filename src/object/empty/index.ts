import * as method from "./method";
import { addPrototype } from "../utils";

declare global {
  interface Object {
    $empty(): void;
  }
}

/**
 * Empty the object
 * @memberof Object.prototype
 * @example
 * const obj = { a: 1 };
 * obj.$empty();
 * // obj = {};
 */
function $empty(this: object): void {
  return method(this);
}

addPrototype("$empty", $empty);
