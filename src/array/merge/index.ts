import { addPrototype } from "../../utils";
import method from "./method";

declare global {
  interface Array<T> {
    merge(arr: any[]): void;
  }
}

/**
 * Merges array with the given array
 * @memberof Array.prototype
 * @function merge
 * @param {*} value
 * @example
 * var myArray = [1, 2, 3]
 * myArray.merge([0, 6 , 2]); // myArray => [1, 2, 3, 0, 6, 2]
 */
addPrototype(Array, "merge", method);
