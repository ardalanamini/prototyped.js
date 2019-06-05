import { addPrototype } from "../../utils";
import method from "./method";

declare global {
  interface Array<T> {
    prepend(value?: any): void;
  }
}

/**
 * Adds an item to the beginning of the array
 * @memberof Array.prototype
 * @function prepend
 * @param {*} value
 * @example
 * var myArray = [1, 2, 3]
 * myArray.prepend(0); // myArray => [0, 1, 2, 3]
 */
addPrototype(Array, "prepend", method);
