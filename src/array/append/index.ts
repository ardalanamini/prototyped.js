import { addPrototype } from "../../utils";
import method from "./method";

declare global {
  interface Array<T> {
    append(value: T): void;
  }
}

/**
 * Same as push but uses concat
 * @memberof Array.prototype
 * @function append
 * @param {*} value
 * @example
 * var myArray = [1, 2, 3]
 * myArray.append(0); // myArray => [1, 2, 3, 0]
 */
addPrototype(Array, "append", method);
