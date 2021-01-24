import merge from ".";
import { addPrototype } from "../../utils";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {
    merge(arr: unknown[]): void;
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
addPrototype(Array, "merge", merge);
