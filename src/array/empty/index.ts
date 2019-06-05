import { addPrototype } from "../../utils";
import method from "./method";

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
