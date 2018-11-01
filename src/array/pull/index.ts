import * as method from "./method";
import { addPrototype } from "../../utils";

declare global {
  interface Array<T> {
    pull(...args: T[]): void;
  }
}

/**
 * Mutates the original array to filter out the values specified
 * @memberof Array.prototype
 * @function pull
 * @param {Array} args
 * @example
 * let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];
 * myArray.pull('a', 'c'); // myArray = [ 'b', 'b' ];
 */
addPrototype(Array, "pull", method);
