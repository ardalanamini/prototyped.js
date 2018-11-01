import * as method from "./method";
import { addPrototype } from "../../utils";

declare global {
  interface Array<T> {
    empty(): void;
  }
}

/**
 * Empty the array
 * @memberof Array.prototype
 * @function empty
 * @example
 * const arr = [1,3];
 * arr.empty();
 * // arr = []
 */
addPrototype(Array, "empty", method);
