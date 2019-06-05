import { addPrototype } from "../../utils";
import method from "./method";

declare global {
  interface Array<T> {
    last(): T;
  }
}

/**
 * Returns the last item of the array
 * @memberof Array.prototype
 * @function last
 * @returns {*}
 * @example
 * [1, 2, 3].last(); // 3
 */
addPrototype(Array, "last", method);
