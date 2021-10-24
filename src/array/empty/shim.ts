import empty from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
addPrototype(Array, "empty", empty);
